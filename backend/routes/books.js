const express = require('express')
const { PrismaClient } = require('@prisma/client');


const router = express.Router()
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const books = await prisma.book.findMany();
  res.json(books);
})

router.get('/:id', async (req, res) => {
  const books = await prisma.book.findUnique({
    where: {
      BookID: parseInt(req.params.id)
    }
  });
  res.json(books);
})

router.post('/', async (req, res) => {
  const { title, authorsID, authors } = req.body;
  try {
    const bookCounter = await prisma.counter.findUnique({
      where: { type: 'Book' },
    });

    const newBookId = bookCounter.currentCount + 1;

    await prisma.counter.update({
      where: { id: bookCounter.id },
      data: { currentCount: newBookId },
    });

    const newBook = await prisma.book.create({
      data: {
        BookID: newBookId,
        title: title,
        AuthorsID: authorsID,
        Authors: authors,
      },
    });

    const updates = authorsID.map(authorId =>
      prisma.author.update({
        where: { AuthorId: authorId },
        data: {
          BooksID: {
            push: newBookId,
          },
          Books: {
            push: title,
          },
        },
      })
    );

    await Promise.all(updates);

    res.json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router