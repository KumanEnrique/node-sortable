const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/order-list',
{ useNewUrlParser: true,useUnifiedTopology: true })
    .then((db)=>console.log('db connected'))
    .catch((error)=>console.log(erroe))