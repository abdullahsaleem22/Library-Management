import React from 'react';
import { Link } from 'react-router-dom';


export default function LandingPage() {
    return (
        <div className="bg-blue-100 font-cursive leading-normal tracking-normal min-h-screen flex flex-col justify-center">
            <header className="text-center py-8">
                <h1 className="text-5xl font-bold">Welcome to Your Library</h1>
            </header>

            <div className="flex justify-center items-center py-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mr-4">
                    <Link to="/books" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Books
                    </Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
                    <Link to="/authors" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Authors
                    </Link>
                </button>
            </div>
        </div>
    );
};
