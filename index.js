'use strict';

const { start } = require('./src/server');

const { db } = require('./src/models'); 
db.sync().then(() => {
    start();
}).catch(console.error);