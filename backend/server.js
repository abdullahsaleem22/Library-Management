const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bookRoutes = require('./routes/books');
const authorRoutes = require('./routes/authors');

const app = express();

app.use(cors())
app.use(express.json());

app.use('/books/',bookRoutes)
app.use('/authors/',authorRoutes);

app.listen(process.env.PORT,() => {
    console.log('Server running on http://localhost:',process.env.PORT);
});