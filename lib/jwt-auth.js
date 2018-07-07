'use strict';

const jwt = require ('jsonwebtoken');
const localConfig = require ('../localConfig.js');


module.exports = function(){
    return (req,res,next)=>{
        
        const token = req.body.token || req.query.token || req.get('x-access-token');

        
        if(!token){
            const err = new Error('no token provided');
            err.status =401
            next(err);
            return;
        }


        
        jwt.verify(token, localConfig.jwt.secret,(err, decoded)=>{
            if(err){
                err.status = 401;
                next(err);
                return;
            }
            req.user_id = decoded.user_id;

            next();

        });
    };
};