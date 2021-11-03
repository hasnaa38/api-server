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

const subscribersSchema = require('./subscribers');
const booksSchema = require('./books');

const subscribersModel = subscribersSchema(sequelize, DataTypes);
const booksModel = booksSchema(sequelize, DataTypes);

subscribersModel.hasMany(booksModel,{foreignKey:'subscriberId',sourceKey:'id'});
booksModel.belongsTo(subscribersModel,{foreignKey:'subscriberId',targetKey:'id'})

const Collection = require('./collection-class');

const subscribersCollection = new Collection(subscribersModel);
const booksCollection = new Collection(booksModel);

module.exports = {
    db: sequelize,
    subscribersCollection: subscribersCollection,
    booksCollection: booksCollection
}