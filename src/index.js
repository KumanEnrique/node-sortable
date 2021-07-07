const path = require('path')
const express = require('express')
const engine = require('ejs-mate')
const app = express()

require('./database')

//settings 
app.set('port',process.env.PORT || 3000)
app.set('views',path.join(__dirname,'views'))
app.engine('ejs',engine)
app.set('view engine','ejs')

//middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes
app.use(require('./routes/Routes'))

//statiic files
app.use(express.static(path.join(__dirname,'public')))

//starting the server
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
})