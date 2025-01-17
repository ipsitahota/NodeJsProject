const mongoose = require ('mongoose');

const mongoURL = 'mongodb+srv://ipsitahota48:ipsitah%40123@ipsitamgdb.fxyjt.mongodb.net/?retryWrites=true&w=majority&appName=IpsitaMGDB';

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