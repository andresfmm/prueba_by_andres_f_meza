'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    name: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowNull: true
    }, 
    username: {
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
    address: {
        type: DataTypes.STRING,
        get: function() {
          return JSON.parse(this.getDataValue('address'));
        }, 
        set: function(val) {
            return this.setDataValue('address', JSON.stringify(val));
        }
    },
    phone: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: true
    },
    geo: {
        type: DataTypes.STRING,
        get: function() {
          return JSON.parse(this.getDataValue('geo'));
        }, 
        set: function(val) {
            return this.setDataValue('geo', JSON.stringify(val));
        }
    },
    website: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: true
    },
    company: {
        type: DataTypes.STRING,
        get: function() {
          return JSON.parse(this.getDataValue('company'));
        }, 
        set: function(val) {
            return this.setDataValue('company', JSON.stringify(val));
        }
    },   
    createdAt: {
      type: DataTypes.STRING
    },
    updatedAt: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};