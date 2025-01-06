# Library Management Website
A full-stack library management website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to manage books and authors, leveraging a many-to-many relationship for enhanced data management and functionality.

## Features
Books Management: View and manage a list of books in the library.
Authors Management: Add, view, and manage authors.
Add Book: Easily add new books to the collection with details like title, author(s), and other relevant information.
Add Author: Add new authors to the database with associated details.
Many-to-Many Relationship: Link multiple authors to a single book and associate multiple books with a single author.
## Technologies Used
### Frontend
React.js: For building a dynamic and responsive user interface.
React Router: For navigation and routing between pages.
TailwindCSS: For styling the application.
### Backend
Node.js: Server-side runtime environment.
Express.js: Web framework for handling API requests.
MongoDB: Database for storing books and authors.
## Getting Started
### Prerequisites
Node.js installed on your machine.
MongoDB set up and running locally or on a cloud service like Atlas.
### Installation

#### Clone the repository:

1. git clone https://github.com/yourusername/library-management.git
2. cd library-management

#### Install dependencies for the backend:

1. cd backend
2. npm install

#### Install dependencies for the frontend:

1. cd ../frontend
2. npm install

#### Set up environment variables:

1. Create a .env file in the backend directory with the following keys:

    MONGO_URI=your_mongo_connection_string
   
    PORT=port_on_which_you_wish_to_run_your_server

### Start the development server:

#### Backend:
1. cd backend
2. npm run dev
#### Frontend:
1. cd frontend
2. npm start

### Access the application:

Open http://localhost:3000 in your browser.

## Project Structure

library-management/
├── backend/
│   ├── prisma/        # prisma models for Books and Authors
│   ├── routes/        # API routes for CRUD operations
│   ├── server.js      # Entry point for the backend server
├── frontend/
│   ├── src/
│   │   ├── components/  # React components for UI
│   │   ├── pages/       # Pages for the application
│   │   ├── App.js       # Main React application
│   │   ├── index.js     # React DOM entry point


## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for improvements or bug fixes.


