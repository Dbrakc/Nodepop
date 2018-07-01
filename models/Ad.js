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

adSchema.statics.list= function (filter,skip,limit){
    const query = Ad.find(filter);
    query.skip(skip);
    query.limit(limit);
    return query.exec();
};




//creamos el modelo
const Ad = mongoose.model('Ad',adSchema);




module.exports = Ad;