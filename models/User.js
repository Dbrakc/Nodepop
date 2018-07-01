'use strict';

const mongoose = require ('mongoose');

//primero definimos un esquema

const userSchema = mongoose.Schema({
    name: String,
    email : {type: String,unique:true},
    password : String
}); 



//creamos el modelo
const User = mongoose.model('User',userSchema);




module.exports = User;