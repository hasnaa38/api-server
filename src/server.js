'use strict';

const express = require('express');
require('dotenv').config();
const cors = require("cors");
// local modules
const errorHandler_404 = require('./error-handlers/404');
const errorHandler_500 = require('./error-handlers/500');
const logger = require('./middleware/logger');

const app = express();
app.use(cors({ origin: '*' }));

// const subscribersRouter = require('./routes/subscribers');
const booksRouter = require('./routes/books');
const categoryRouter = require('./routes/categories');

// Global Middlewares
app.use(express.json());
app.use(logger);

// app.use(subscribersRouter);
app.use(booksRouter);
app.use(categoryRouter);

const PORT = process.env.PORT || 4000;
function start() {
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`);
    })
}

// proof of life 
app.get('/', (req, res) => {
    res.status(200).send('App running successfully. Use the \'books\' endpoint to access the books database')
});

app.use('*', errorHandler_404);
app.use(errorHandler_500);

module.exports = {
    app: app,
    start: start
}