'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_crud extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_crud.init({
    name: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: true
    }, 
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: {
                msg: 'Email address must be valid.'
            },
        },
        unique: {
          msg: 'This emails is already taken.'
      },
    },
    city: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: true
    },
    company_name: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: true
    },
    active: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
  }, {
    sequelize,
    modelName: 'Users_crud',
  });
  return Users_crud;
};