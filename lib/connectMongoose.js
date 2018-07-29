'use strict';

const mongoose = require ('mongoose');
const conn = mongoose.connection;

conn.on('error',err => console.log('Error de mongodb',err));
conn.once('open', ()=> console.log('Connectado a MongoDB en ', conn.name));

console.log(process.env.DB_CONNECTION);
mongoose.connect(process.env.DB_CONNECTION);

module.exports=conn;