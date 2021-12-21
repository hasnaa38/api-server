'use strict';

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: { 
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const booksSchema = require('./books');
const categoriesSchema = require('./categories');

const booksModel = booksSchema(sequelize, DataTypes);
const categoriesModel = categoriesSchema(sequelize, DataTypes);

const Collection = require('./collection-class');

const booksCollection = new Collection(booksModel);
const categoriesCollection = new Collection(categoriesModel);

module.exports = {
    db: sequelize,
    // subscribersCollection: subscribersCollection,
    booksCollection: booksCollection,
    categoriesCollection: categoriesCollection
}


// const subscribersSchema = require('./subscribers');
// const subscribersModel = subscribersSchema(sequelize, DataTypes);
// subscribersModel.hasMany(booksModel,{foreignKey:'subscriberId',sourceKey:'id'});
// booksModel.belongsTo(subscribersModel,{foreignKey:'subscriberId',targetKey:'id'})
// const subscribersCollection = new Collection(subscribersModel);