const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    name: {type:String,required:true},
    price: {type:Number,default: 0},
    sorting: {type:Number,default: 0}
})

module.exports = mongoose.model('product',Product)