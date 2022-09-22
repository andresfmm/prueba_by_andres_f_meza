
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');


// const  User  = require('../routes/user');
// const  Product  = require('../routes/product');

const { dbConnection } = require('../database/dbConnection');
const { PlaceHolderRoute } = require('../routes/placeholder');


class Server{
   
      constructor() {
          this.app = express();
          this.conexionDb();
          
          this.paths = {
             api_placeholder: '/api/placeholder',
          }

          this.middlewares();
          this.routes();

          
      }

      async conexionDb(){
          await dbConnection();
      }

      middlewares() {
          this.app.use( cors() );
      }

      routes(){
        this.app.use(this.paths.api_placeholder,  PlaceHolderRoute);
      }

      listen(){
        this.app.listen( process.env.PORT, () => {
            console.log('puerto corriendo en ', process.env.PORT )
         });
      }
}


module.exports = Server;