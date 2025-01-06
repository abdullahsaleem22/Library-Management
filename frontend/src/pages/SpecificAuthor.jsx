import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const SpecificAuthor = () => {
  const { AuthorID } = useParams();
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await fetch(`http://localhost:3001/authors/${AuthorID}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAuthor(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchAuthor();
  }, [AuthorID]);

  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  if (!author) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Author Details</h1>
      <div className="mb-2">Author ID: {author.AuthorId}</div>
      <div className="mb-2">Name: {author.name}</div>
      <h2 className="text-xl font-bold mb-2">Books by this Author:</h2>
      <ul className="space-y-4">
        {author.Books.map((book, index) => (
          <li key={author.BooksID[index]} className="p-4 border rounded shadow-sm">
            <Link to={`/books/${author.BooksID[index]}`} className="block">
              <div className="font-semibold">Book ID: {author.BooksID[index]}</div>
              <div className="text-lg">Title: {book}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecificAuthor;
