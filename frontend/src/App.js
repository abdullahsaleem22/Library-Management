import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Books from './pages/Books';
import Authors from './pages/Authors';
import SpecificAuthor from './pages/SpecificAuthor';
import SpecificBook from './pages/SpecificBook';
import AddBook from './pages/AddBook';
import AddAuthor from './pages/AddAuthor';

function App() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-lg">
            Library Management System
          </div>
          <div className="text-white">
            <Link to="/" className="px-4 hover:underline">Home</Link>
            <Link to="/books" className="px-4 hover:underline">Books</Link>
            <Link to="/authors" className="px-4 hover:underline">Authors</Link>
            <Link to="/addBook" className="px-4 hover:underline">Add Book</Link>
            <Link to="/addAuthor" className="px-4 hover:underline">Add Author</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/books/:BookID" element={<SpecificBook />} />
        <Route path="/authors/:AuthorID" element={<SpecificAuthor />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/addAuthor" element={<AddAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
