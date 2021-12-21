'use strict';

const categories = (sequelize, DataTypes) =>
    sequelize.define('categories', {
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        description: {
            type: DataTypes.STRING,
            allowNull:false
        }
    });

module.exports = categories;