module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users', {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: false,
            allowNull: true
        }, 
        username: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: false,
            allowNull: true
        },
        email: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: false,
            allowNull: true,
            unique: true
        },
        address: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: false,
            allowNull: true
        },
        phone: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: false,
            allowNull: true
        },
        geo: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: false,
            allowNull: true
        },
        website: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: false,
            allowNull: true
        },
        company: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: false,
            allowNull: true
        },
        createdAt:{
            type: Sequelize.DataTypes.STRING,
        },
        updatedAt:{
            type: Sequelize.DataTypes.STRING,
        },
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Users');
    }
};