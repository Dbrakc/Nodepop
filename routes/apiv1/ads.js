'use strict';

const express = require ('express');
const router = express.Router();

const Ad = require('../../models/Ad');


router.get("/",async (req,res,next)=>{
    /*name : String,
    status: {type: String, enum: ['sell', 'search']},
    price : Number,
    photo: String,
    tags: {type: [String], enum: ['work','lifestyle','motor','mobile']}*/
    try{
        const name = req.query.name;
        const status = req.query.status;
        const maxPrice = req.query.maxPrice;
        const minPrice = req.query.minPrice || 0;
        const tags = req.query.tags;
        const skip = parseInt(req.query.skip);
        const limit = parseInt(req.query.limit);
        const fields = req.query.fields;
        const sort = req.query.sort;
        
        const filter = {};
        if(name){
            filter.name=name;
        }
        if(status){
            filter.status = status;
        }
        if(maxPrice){
            filter.price = {$lte: maxPrice, $gte: minPrice};
        }else{
            filter.price = {$gte: minPrice};
        }
        
        if(tags){
            filter.tags =tags;
        }


        const ads = await Ad.list(filter,skip,limit,fields,sort);
        res.json({ succes: true, result: ads});
    }catch(err){
        next(err);
    }   
});

module.exports = router;