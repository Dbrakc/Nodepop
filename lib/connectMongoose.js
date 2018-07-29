'use strict';

const mongoose = require ('mongoose');
const conn = mongoose.connection;

conn.on('error',err => console.log('Error de mongodb',err));
conn.once('open', ()=> console.log('Connectado a MongoDB en ', conn.name));


mongoose.connect(process.env.DB_CONNECTION, { user: process.env.MONGODB_USER, pass: process.env.MONGO_DB_PWD});

module.exports=conn;