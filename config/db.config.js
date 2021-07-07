
const Sequlize = require('sequelize');

const sequelize = new Sequlize('5GlSHutQPo','5GlSHutQPo','Y6E5xeC1bL',{
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