'use strict';

const books = (sequelize, DataTypes) =>
    sequelize.define('books', {
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        inventoryCount: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING,
            allowNull:false
        }
    });

module.exports = books;