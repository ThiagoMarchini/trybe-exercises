'use strict';
const { Model } = require('sequelize');

const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    // Novo DataType da coluna phone
    phone_num: DataTypes.STRING,
  });

  return User;
};

module.exports = User;