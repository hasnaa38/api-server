'use strict';

const subscribers = (sequelize, DataTypes) =>
    sequelize.define('subscribers', {
        name: {
            type: DataTypes.STRING,
            allowNull:false
        }
    });

module.exports = subscribers;