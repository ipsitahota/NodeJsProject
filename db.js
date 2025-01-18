const mongoose = require ('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
})

db.on('disconnected',()=>{
    console.log('MongoDB server Disconnected');
})

db.on('error',(err)=>{
    console.log('Error MongoDB server');
})

module.exports =db;  