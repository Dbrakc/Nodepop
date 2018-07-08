'use strict';

const mongoose = require ('mongoose');
const crypto = require ('crypto');

//primero definimos un esquema

const userSchema = mongoose.Schema({
    name: {type: String, required:true},
    email : {type: String, unique:true, required:true},
    password : {type: String, unique:true, required: true}
}); 

userSchema.methods.validatePassword = function (userHashedPassword, newPassword){
    const newPaswordHashed =  crypto.createHash('sha256',newPassword,'base64');
    return newPaswordHashed === userHashedPassword;
};

//creamos el modelo
const User = mongoose.model('User',userSchema);





module.exports = User;