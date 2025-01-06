import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [authorsID, setAuthorsID] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let authorsArray = []
      let authorsIDArray = []
      if (authors !== '' && authorsID !== '') {
        authorsArray = authors.split(',').map(author => author.trim());
        authorsIDArray = authorsID.split(',').map(id => parseInt(id.trim()));
      }
      const response = await fetch('http://localhost:3001/books/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          authors: authorsArray,
          authorsID: authorsIDArray,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add book');
      }

      navigate('/books');
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) alert(error)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
            placeholder='*Required'
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Authors (comma separated):</label>
          <input
            type="text"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            placeholder='Optional, only if authors already added'
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author IDs (comma separated):</label>
          <input
            type="text"
            value={authorsID}
            onChange={(e) => setAuthorsID(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            placeholder='Optional, only if authors already added'
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
