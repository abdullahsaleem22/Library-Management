const express = require('express')
const { PrismaClient } = require('@prisma/client');

const router = express.Router()
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    const authors = await prisma.author.findMany();
    res.json(authors);
})

router.get('/:id', async (req, res) => {
    const authors = await prisma.author.findUnique({
        where: {
            AuthorId: parseInt(req.params.id)
        }
    });
    res.json(authors);
})

router.post('/', async (req, res) => {
    const { name, booksID, books } = req.body;
    try {
        const authorCounter = await prisma.counter.findUnique({
            where: { type: 'Author' },
        });

        const newAuthorId = authorCounter.currentCount + 1;

        await prisma.counter.update({
            where: { id: authorCounter.id },
            data: { currentCount: newAuthorId },
        });

        const newAuthor = await prisma.author.create({
            data: {
                AuthorId: newAuthorId,
                name: name,
                BooksID: booksID,
                Books: books,
            },
        });

        const updates = booksID.map(bookId =>
            prisma.book.update({
                where: { BookID: bookId },
                data: {
                    AuthorsID: {
                        push: newAuthorId,
                    },
                    Authors: {
                        push: name,
                    },
                },
            })
        );

        await Promise.all(updates);

        res.json(newAuthor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router