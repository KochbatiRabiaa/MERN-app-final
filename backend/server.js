const express= require('express')
const cors = require('cors')
const connect=require('./connectDB/connect')
const usersRoute = require('./routes/usersRoute')
const app= express()
const error =require('./Midllewares/errorMidllewares')
const booksRoute=require('./routes/booksRoute')
//const path=require('path');


//passing body data 
app.use(express.json())


app.use(cors())


//Routes
//usersRoute
app.use('/api/users' , usersRoute)
//booksRoute
app.use('/api/books', booksRoute)


{/*if(process.env.NODE_ENV === "production"){
    app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}*/}

//error midlleware
app.use(error.errorMidellwareHandler)





const port= process.env.PORT||4000
connect()


app.listen(port,err=>{
    err?console.log('OOPS', err): console.log(`serveur is up and running on port ${port}`)
})