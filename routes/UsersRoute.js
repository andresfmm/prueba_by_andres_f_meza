const  { Router } = require("express");
const { createUsersController, getUsersController, deleteUsersController, restoreUsersController } = require("../controllers/userscrud.controller");



const UsersRoutes = Router();

UsersRoutes.post('/', createUsersController);

UsersRoutes.get('/', getUsersController);

UsersRoutes.delete('/:id', deleteUsersController);

UsersRoutes.patch('/', restoreUsersController);


module.exports = {
    UsersRoutes
}