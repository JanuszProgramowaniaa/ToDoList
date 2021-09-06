const express = require("express")
const app =express();
const cors = require('cors')
const {port}= require('./config')
const apiRouter=require('./routes/api')



//parsery
app.use(express.json());
//fix cors
app.use(cors())
//db
require('./db/mongoose')


///routers
app.use('/api',apiRouter)








//Server
app.listen(port,function(){
console.log('serwer słucha.. http://localhost:'+port)
})