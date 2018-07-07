'use strict';

const express = require ('express');
const router = express.Router();
const jwt = require ('jsonwebtoken');
const localConfig = require ('../../localConfig');
const User = require('../../models/User');


router.post("/login",async (req,res,next)=>{
 try{
   
    const email = req.body.email;
    const password = req.body.password;
    //buscamos en la base de datos de usuarios
    const user = await User.findOne({email:email}).exec();
    //Si encontramos al usuario comprobamos su passsword
    if(!user){
        res.json({success: true, message: 'invalid credentials'});
        return;
    }


    //si la password esta bien creamos JWT
    if(password !== user.password){
        res.json({success: true, message : 'invalid credentials'});
        return;
    }

    jwt.sign({user_id: user._id}, localConfig.jwt.secret,{
        expiresIn: localConfig.jwt.expiresIn
    }, (err, token)=>{
        if(err){
            next(err);
            return;
        }
        res.json({success: true, token});

    });


    //respondemos al cliente enviandole el JWT
   }catch(error){
       next(error);
   }
   
});

module.exports = router;