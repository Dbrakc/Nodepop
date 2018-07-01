'use strict';

const mongoose = require ('mongoose');

//primero definimos un esquema

const adSchema = mongoose.Schema({
    name : String,
    status: {type: String, enum: ['sell', 'search']},
    price : Number,
    photo: String,
    tags: {type: [String], enum: ['work','lifestyle','motor','mobile']}
}); 

adSchema.statics.list= function (filter,skip){
    const query = Ad.find(filter);
    query.skip(skip);
    return query.exec();
};




//creamos el modelo
const Ad = mongoose.model('Ad',adSchema);




module.exports = Ad;