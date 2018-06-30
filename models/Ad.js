'use strict';

const mongoose = require ('mongoose');

//primero definimos un esquema

const adSchema = mongoose.Schema({
    name : String,
    status: {type: String, enum: ['sell', 'search']},
    precio : Number,
    foto: String,
    tags: {type: [String], enum: ['work','lifestyle','motor','mobile']}
}); 

//metodo statico
/*adSchema.statics.list = function (filter,skip,limit,fields,sort) {
    //crear la query sin ejecutarla 
    const query = Agente.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);


    //ejecutamos la query y devolvemos una Promesa
    return  query.exec();
};*/


//creamos el modelo
const Ad = mongoose.model('Ad',adSchema);

module.exports = Ad;