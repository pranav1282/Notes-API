const express = require('express');
const app = express();
const noteRouter = require('./routes/noteRoutes');
const userRouter = require('./routes/userRoutes');
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config();

app.use(express.json())

app.use(cors())

// app.use((req, res, next)=>{
//     console.log("HTTP Mehtod: " + req.method + ", URL : " + req.url);
//     next()
// })

app.use('/users', userRouter);
app.use('/note', noteRouter);

app.get("/", (req, res)=>{
    res.send("Notes API")
})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT, (req, res)=>{
    console.log('server listning on port : ' +  PORT)
})
}).catch((err)=>{
    console.log(err);
})