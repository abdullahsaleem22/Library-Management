import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAuthor = () => {
  const [name, setName] = useState('');
  const [books, setBooks] = useState('');
  const [booksID, setBooksID] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let booksArray = []
      let booksIDArray = []
      if (books !== '' && booksID !== '') {
        booksArray = books.split(',').map(book => book.trim());
        booksIDArray = booksID.split(',').map(id => parseInt(id.trim()));
      }
      const response = await fetch('http://localhost:3001/authors/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          books: booksArray,
          booksID: booksIDArray,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add author');
      }

      navigate('/authors');
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) alert(error);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Author</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
            placeholder='*Required'
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Books (comma separated):</label>
          <input
            type="text"
            value={books}
            onChange={(e) => setBooks(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            placeholder='Optional, only if books already added'
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Book IDs (comma separated):</label>
          <input
            type="text"
            value={booksID}
            onChange={(e) => setBooksID(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            placeholder='Optional, only if books already added'
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Author
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAuthor;
