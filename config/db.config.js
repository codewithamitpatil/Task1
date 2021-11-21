
const Sequlize = require('sequelize');

const sequelize = new Sequlize(,{
    host:"remotemysql.com",
    dialect:'mysql',
    port: 3306
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
