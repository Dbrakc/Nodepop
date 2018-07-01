'use strict';

const express = require ('express');
const router = express.Router();

const Ad = require('../../models/Ad');


router.get("/",async (req,res,next)=>{
    try{
    const ads = await Ad.list();
    res.json({ succes: true, result: ads});
    }catch(err){
        next(err);
    }   
});

module.exports = router;