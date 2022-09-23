
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PlaceHolderRoute } = require('../routes/placeholder');
const { UsersRoutes } = require('../routes/UsersRoute');


class Server{
   
      constructor() {
          this.app = express();
          
          this.paths = {
             api_placeholder: '/api/placeholder',
             users:           '/api/users',
          }

          this.middlewares();
          this.routes();

          
      }

    
      middlewares() {
          this.app.use( cors() );
          this.app.use(bodyParser.json())
          this.app.use(bodyParser.urlencoded({ extended: true }));
      }

      routes(){
        this.app.use(this.paths.api_placeholder, PlaceHolderRoute);
        this.app.use(this.paths.users, UsersRoutes);
      }

      listen(){
        this.app.listen( process.env.PORT, () => {
            console.log('puerto corriendo en ', process.env.PORT )
         });
      }
}


module.exports = Server;