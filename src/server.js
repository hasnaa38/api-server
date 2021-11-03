'use strict';

const express = require('express');
require('dotenv').config();

// local modules
const errorHandler_404 = require('./error-handlers/404');
const errorHandler_500 = require('./error-handlers/500');
const logger = require('./middleware/logger');

const app = express();

const subscribersRouter = require('./routes/subscribers');
const booksRouter = require('./routes/books');

// Global Middlewares
app.use(express.json());
app.use(logger);

app.use(subscribersRouter);
app.use(booksRouter);

const PORT = process.env.PORT || 3001;
function start() {
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`);
    })
}

app.use('*', errorHandler_404);
app.use(errorHandler_500);

module.exports = {
    app: app,
    start: start
}