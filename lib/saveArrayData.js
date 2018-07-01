'use strict';

const async = require('async');
module.exports = function (objectArray){
    async.forEach(objectArray, (object)=>{
        object.save((err, objectCreado)=>{
            if(err){
                console.error (err);
                return;
            }
            console.log(`Creado objeto ${objectCreado}`);
        });
    });
};