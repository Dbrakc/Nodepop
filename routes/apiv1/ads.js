'use strict';

const express = require ('express');
const router = express.Router();
const Ad = require('../../models/Ad');
const jwtAuth = require ('../../lib/jwt-auth');


router.get("/",jwtAuth(),async (req,res,next)=>{
    /*name : String,
    status: {type: String, enum: ['sell', 'search']},
    price : Number,
    photo: String,
    tags: {type: [String], enum: ['work','lifestyle','motor','mobile']}*/
    try{
        const name = req.query.name;
        const status = req.query.status;
        const price = req.query.price;
        const tags = req.query.tags;
        const skip = parseInt(req.query.skip);
        const limit = parseInt(req.query.limit);
        const fields = req.query.fields;
        const sort = req.query.sort;
        
        const filter = {};
        if(name){
            filter.name= new RegExp('^' + name, "i");
        }
        if(status){
            filter.status = status;
        }
        if(price){
            const lastIndex = price.lastIndexOf('-');
            let lteValue;
            let gteValue;
            if(lastIndex===-1){
                filter.price = price;
            } else if (lastIndex===0){
                lteValue = price.substring(1,price.length);
                console.log(lteValue);
                filter.price = {$lte: lteValue};
            } else if (lastIndex===price.length-1){
                gteValue = price.substring(0,price.length-1);
                filter.price = {$gte: gteValue};
            } else{
                gteValue = price.substring(0,lastIndex);
                lteValue = price.substring(lastIndex+1, price.length);
                filter.price = {$lte : lteValue, $gte : gteValue};
            }

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




router.get("/tags",jwtAuth(),async (req,res,next)=>{
        const tags = Ad.getTags();
        res.json({ succes: true, result: tags});
    
});

module.exports = router;