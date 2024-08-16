const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('brylibrarycode', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Cambia a true si quieres ver los logs de las consultas SQL
});

module.exports = sequelize;
