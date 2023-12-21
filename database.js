const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.CONNECTION_STRING);

// Test the connection
async function testDBConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = { sequelize, testDBConnection };
