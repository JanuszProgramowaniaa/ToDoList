const express = require("express")
const app =express();
const {port}= require('./config')
const apiRouter=require('./routes/api')
const bodyParser = require('body-parser')

//db
require('./db/mongoose')

///routers
app.use('/api',apiRouter)

//parsery

app.use(express.json());





//Server
app.listen(port,function(){
console.log('serwer słucha.. http://losalhost:3000')
})