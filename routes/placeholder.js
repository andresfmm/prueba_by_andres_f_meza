const  { Router } = require("express");
const { PlaceHolderController } = require("../controllers/placeholder.controller");



const PlaceHolderRoute = Router();

PlaceHolderRoute.get('/', PlaceHolderController);


module.exports = {
    PlaceHolderRoute
}