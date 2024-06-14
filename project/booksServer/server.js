var express = require('express');
var handlers = require("./restHandlers")
var cors = require('cors')

const port = 8888
var app = express();
app.use(express.json());
app.use(cors()) 

// static files config
//app.use(express.static('build'))

// Get all books
app.get('/books', handlers.getBooks) 

// Search by title
app.get("/books/search", handlers.searchBooks)

// Get books by author 
app.get('/books/author', handlers.getBooksByAuthor)

// Get Authors list 
app.get('/authors', handlers.getAuthorsBooksCount)

// Get book by id 
app.get('/books/:id', handlers.getBookById)


// Insert a new book in Books Table
app.post('/books', handlers.addBook)

// Update details of the given book 
app.put('/books/:id', handlers.updateBook)

// Delete book by the given id 
app.delete('/books/:id', handlers.deleteBook)


app.listen(port, () => {
  console.log(`Books Server listening on port ${port}`)
})

