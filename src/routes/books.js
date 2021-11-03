'use strict';

const express = require('express');
const router = express.Router();

const { booksCollection } = require('../models/index');

router.get('/books', getBooks);
router.get('/books/:id', getBook);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook)

async function getBooks(req,res) {
    let books = await booksCollection.read();
    res.status(200).json(books);
}

async function getBook(req,res) {
    let bookId = parseInt(req.params.id);
    let book = await booksCollection.read(bookId);
    res.status(200).json(book);
}

async function createBook(req,res) {
    let newBook = req.body;
    let book = await booksCollection.create(newBook);
    res.status(201).json(book);
}

async function updateBook(req,res) {
    let bookId = parseInt(req.params.id);
    let newBook = req.body;
    let updatedBook = await booksCollection.update(bookId, newBook);
    res.status(201).json(updatedBook);
}

async function deleteBook(req, res) {
    let bookId = parseInt(req.params.id);
    let deletedBook = await booksCollection.delete(bookId);
    res.status(204).json(deletedBook);
}

module.exports = router;