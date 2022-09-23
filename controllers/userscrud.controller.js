const { response } = require('express');
const fetch = require('node-fetch');

const { Users_crud }  = require('../models');


const createUsersController = async( req, res = response ) => {
    
    try {

        const { name, email, city, company_name } = req.body;

        const user = Users_crud.build({ name, email, city, company_name });
        await user.save();


        res.status(200).json({
            ok: true,
            msg: 'Usuario creado',
            
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error.errors[0].message,
        });
    }
}




const getUsersController = async( req, res = response ) => {
    
    try {

        const users = await Users_crud.findAll();


        res.status(200).json({
            ok: true,
            msg: users,
            
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error.errors[0].message,
        });
    }
}



const deleteUsersController = async( req, res = response ) => {
    
    try {

        const { id } = req.params;

        Users_crud.update({ active: 0}, { where: { id: id}})


        res.status(200).json({
            ok: true,
            msg: "El usuario ha sido desactivado",
            
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: error.errors[0].message,
        });
    }
}



const restoreUsersController = async( req, res = response ) => {
    
    try {

        const { id } = req.body;

    

        Users_crud.update({ active: 1}, { where: { id: id}})


        res.status(200).json({
            ok: true,
            msg: "El usuario ha sido activado",
            
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: error.errors[0].message,
        });
    }
}


module.exports = {
    createUsersController,
    deleteUsersController,
    getUsersController,
    restoreUsersController,
    
}