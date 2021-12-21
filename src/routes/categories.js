'use strict';

const express = require('express');
const router = express.Router();

const { categoriesCollection } = require('../models/index');

router.get('/categories', getCategories);
router.get('/categories/:id', getCategory);
router.post('/categories', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory)

async function getCategories(req,res) {
    let Category = await categoriesCollection.read();
    res.status(200).json(Category);
}

async function getCategory(req,res) {
    let CategoryId = parseInt(req.params.id);
    let Category = await categoriesCollection.read(CategoryId);
    res.status(200).json(Category);
}

async function createCategory(req,res) {
    let newCategory = req.body;
    let category = await categoriesCollection.create(newCategory);
    res.status(201).json(category);
}

async function updateCategory(req,res) {
    let categoryId = parseInt(req.params.id);
    let newCategory = req.body;
    let updatedCategory = await categoriesCollection.update(categoryId, newCategory);
    res.status(201).json(updatedCategory);
}

async function deleteCategory(req, res) {
    let categoryId = parseInt(req.params.id);
    let deletedCategory = await categoriesCollection.delete(categoryId);
    res.status(204).json(deletedCategory);
}

module.exports = router;