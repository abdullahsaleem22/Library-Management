import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3001/books/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchBooks();
  }, []);

  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Books List</h1>
      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book.BookID} className="p-4 border rounded shadow-sm hover:bg-gray-100">
            <Link to={`/books/${book.BookID}`} className="block">
              <div className="font-semibold">Book ID: {book.BookID}</div>
              <div className="text-lg">Title: {book.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
