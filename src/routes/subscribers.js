'use strict';

const express = require('express');
const router = express.Router();

const { subscribersCollection } = require('../models/index');

router.get('/subscribers', getSubscribers);
router.get('/subscribers/:id', getSubscriber);
router.post('/subscribers', createSubscribers);
router.put('/subscribers/:id', updateSubscribers);
router.delete('/subscribers/:id', deleteSubscribers)

async function getSubscribers(req,res) {
    let subscribers = await subscribersCollection.read();
    res.status(200).json(subscribers);
}

async function getSubscriber(req,res) {
    let subscriberId = parseInt(req.params.id);
    let subscriber = await subscribersCollection.read(subscriberId);
    res.status(200).json(subscriber);
}

async function createSubscribers(req,res) {
    let newSubscriber = req.body;
    let subscriber = await subscribersCollection.create(newSubscriber);
    res.status(201).json(subscriber);
}

async function updateSubscribers(req,res) {
    let subscriberId = parseInt(req.params.id);
    let newSubscriber = req.body;
    let updatedSubscriber = await subscribersCollection.update(subscriberId, newSubscriber);
    res.status(201).json(updatedSubscriber);
}

async function deleteSubscribers(req, res) {
    let subscriberId = parseInt(req.params.id);
    let deletedSubscriber = await subscribersCollection.delete(subscriberId);
    res.status(204).json(deletedSubscriber);
}

module.exports = router;