const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-app', 'root','nodeintro',
 {dialect :'mysql',host:'localhost'});

 module.exports = sequelize;
