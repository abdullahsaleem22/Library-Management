import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const SpecificBook = () => {
  const { BookID } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:3001/books/${BookID}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchBook();
  }, [BookID]);

  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  if (!book) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book Details</h1>
      <div className="mb-2">Book ID: {book.BookID}</div>
      <div className="mb-2">Title: {book.title}</div>
      <div className="mb-2">
        Authors: {book.Authors.map((author, index) => (
          <span key={index}>
            <Link to={`/authors/${book.AuthorsID[index]}`} className="text-blue-500 hover:underline">
              {author}
            </Link>
            {index < book.Authors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SpecificBook;
