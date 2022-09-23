const { response } = require('express');
const fetch = require('node-fetch');

const { Users }  = require('../models');


const PlaceHolderController = async( req, res = response ) => {
    
    try {


        const result = await fetch(process.env.URL_PLACEHOLDER);
        const data = await result.json();
       
        // SE ELIMINAN LAS PROPIEDADES id PORQUE AUNQUE NO ESTA MAPIADA EN EL MODELO LA INTENTA GUARDAR 
        const data_save = data.map(({id, ...rest})=> rest);

         
        await Users.bulkCreate(data_save);

        res.status(200).json({
            ok: true,
            msg: data,
            
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error.errors[0].message,
        });
    }
}


module.exports = {
    PlaceHolderController
}