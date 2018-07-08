'use strict';

const mongoose = require ('mongoose');

const tags = ['work','lifestyle','motor','mobile']

//primero definimos un esquema

const adSchema = mongoose.Schema({
    name : String,
    status: {type: String, enum: ['sell', 'search']},
    price : Number,
    photo: String,
    tags: {type: [String], enum: tags}
}); 

adSchema.statics.list= function (filter,skip,limit,fields,sort){
    const query = Ad.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec();
};

adSchema.statics.getTags= function (){
    return tags;   
};


//creamos el modelo
const Ad = mongoose.model('Ad',adSchema);




module.exports = Ad;