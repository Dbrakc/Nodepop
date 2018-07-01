'use strict';

const conn =require('../lib/connectMongoose');
const ads = require('../dataLoaders/ads');
//const users = require('../dataLoaders/users');

conn.once('open',()=>{
    ads.initCollectionWithData();
    //users.initCollectionWithData();
});
