const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('brylibrarycode', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const Libro = sequelize.define('Libro', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

sequelize.sync({ alter: true }).then(() => {
    console.log('Modelo de libro sincronizado');
}).catch(err => {
    console.error('Error al sincronizar el modelo de libro:', err);
});

module.exports = Libro;
