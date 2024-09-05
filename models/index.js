const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lessons: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

const Referrer = sequelize.define('Referrer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uniqueCode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Referrer.hasMany(Student, { as: 'invitedStudents', foreignKey: 'referrerId' });
Student.belongsTo(Referrer, { foreignKey: 'referrerId' });

module.exports = { Student, Referrer };
