const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nftItemSchema = new Schema({
    image:{type:String, required:true},
    price:{type:String, required:true},
    attr:{type:String, required:true},
    token:{type:String, required:true},
    name:{type:String, required:true},
});

const collectionSchema = new Schema({
    name:{type:String, required:true},
    logo:{type:String, required:true},
    volume:{type:String, required:true},
    nftItem: {type:Schema.Types.ObjectId, ref:'nftItem'},
});

const whitelistSchema = new Schema({
    address:{type:String, required:true},
});

const nftItem = mongoose.model('nftItem', nftItemSchema, 'nftItem');
const collection = mongoose.model('collection', collectionSchema, 'collection');
const whitelist = mongoose.model('whitelist', whitelistSchema, 'whitelist');
const mySchemas = {'nftItem':nftItem, 'collection':collection, 'whitelist':whitelist};

module.exports = mySchemas;