'use strict';

const express = require ('express');
const router = express.Router();

const Ad = require('../../models/Ad');


router.get("/",(req,res,next)=>{
    const ad = new Ad({
        name: 'name1',
        status: 'sell',
        precio : 12.5,
        foto: '../../images/photo1.jpg',
        tags: ['work','lifestyle']
    });
    
     ad.save(((err, adCreado)=>{
         if(err){
             next(err);
             return;
         }
         console.log(adCreado);
         res.send('ok');

     }));
});

module.exports = router;