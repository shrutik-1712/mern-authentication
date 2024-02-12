require('dotenv').config()
const express=require('express');
const mongoose=require('mongoose');
const conn=require('./config/ConnectToDB');
const app = express();
app.use(express)
conn();
app.listen(process.env.port,()=>{
    console.log(`app running on port:${process.env.port}`)
})