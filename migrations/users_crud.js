module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users_cruds', {
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
        email: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: false,
            allowNull: true,
            unique: true
        },
        city: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: false,
            allowNull: true
        },
        company_name: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: false,
            allowNull: true
        },
        active: {
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 1,
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
      return queryInterface.dropTable('Users_cruds');
    }
};