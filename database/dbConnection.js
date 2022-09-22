const Sequelize = require("sequelize");



const dbConnection = async () => {
    
    try {

        const sequelize = new Sequelize(
            'prueba_tecnica_node',
            'root',
            '',
             {
               host: 'localhost',
               dialect: 'mysql'
             }
           );
           
           
           sequelize.authenticate().then(() => {
              console.log('Connection has been established successfully.');
           }).catch((error) => {
              console.error('Unable to connect to the database: ', error);
           });
           
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
   dbConnection
}