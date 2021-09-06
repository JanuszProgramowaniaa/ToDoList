const express = require("express")
const app =express();
//parsery
app.use(express.json());

const {port}= require('./config')




const apiRouter=require('./routes/api')



//db
require('./db/mongoose')


///routers
app.use('/api',apiRouter)








//Server
app.listen(port,function(){
console.log('serwer słucha.. http://losalhost:3000')
})