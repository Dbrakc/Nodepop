'use strict';
const Ad = require ('../models/Ad.js');
const saveArrayData= require('../lib/saveArrayData');

module.exports = {
    ads : [
        {
            name: 'ad1',
            status: 'sell',
            price : 12.5,
            photo: '../../images/photo1.jpg',
            tags: ['work','lifestyle']
        },
        {
            name: 'ad2',
            status: 'search',
            price : 20.3,
            photo: '../../images/photo2.jpg',
            tags: ['motor','mobile']
        },
        {
            name: 'ad3',
            status: 'search',
            price : 40.9,
            photo: '../../images/photo3.jpg',
            tags: ['motor','mobile']

        }
    ],
    initCollectionWithData: function (){
        Ad.remove({},(err)=>{  
            if(err){
                console.error(err);
                return;
            }
        });    
       const adsArray = this.ads.map( ad=>new Ad(ad));
       saveArrayData(adsArray);
    }
};
