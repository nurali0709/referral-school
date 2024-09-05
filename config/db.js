const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('schooldb', 'nurali', 'nurali2003', {
  host: 'localhost',
  dialect: 'postgres',
  logging: true
});

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Failed to synchronize database:', error);
  });


module.exports = sequelize;
