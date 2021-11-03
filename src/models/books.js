'use strict';

const books = (sequelize, DataTypes) =>
    sequelize.define('books', {
        book_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        subscriberId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

module.exports = books;