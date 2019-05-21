const Sequelize = require('sequelize')
const connection = require('../config')
const ToDo = require('./todo.js')
class Burger extends Sequelize.Model {}

Burger.init({
    burgerName: {
        type: Sequelize.STRING,
        allowNull: false,
        isAlphaNumeric: true,
    },
    devoured: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, { sequelize: connection, modelName: 'burger' })

module.exports = Burger