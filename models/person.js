const { uniqueId } = require('lodash');
const mongoose = require('mongoose');
const bcrypt=require('bcrypt');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type: Number,
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

 personSchema.pre('save',async function(next){
    const person =this;
    
    //hash thrpassword only if it has been modified (or is new)
    if(!person.isModified('password')) return next();

    try{
        //hash password generation
        const salt =await bcrypt.genSalt(10);

        //hash password
        const hashedPassword = await bcrypt.hash(person.password,salt);

        //override the plain password with hashed one
        person.password=hashedPassword;

        next();
    }catch(err){
        return next(err);
    }
 })

personSchema.methods.comparePassword =async function(candidatePassword){
    try{
        const isMatch =await bcrypt.compare(candidatePassword,this.password);
        return isMatch;

    }catch(err){
        throw err;

    }
}

//alice123 -------> slkjd3ep0ipow3es0
//login --------> bobby
//slkjd3ep0ipow3es0 ---------> extract salt
//salt+bobby -------> hash ----------> woejdiopwdopw0i0w

//create password model
const Person = mongoose.model('Person',personSchema);
module.exports=Person;