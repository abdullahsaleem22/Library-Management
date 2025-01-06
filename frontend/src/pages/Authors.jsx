import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch('http://localhost:3001/authors/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAuthors(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchAuthors();
  }, []);

  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Authors List</h1>
      <ul className="space-y-4">
        {authors.map((author) => (
          <li key={author.AuthorId} className="p-4 border rounded shadow-sm hover:bg-gray-100">
            <Link to={`/authors/${author.AuthorId}`} className="block">
              <div className="font-semibold">Author ID: {author.AuthorId}</div>
              <div className="text-lg">Name: {author.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
