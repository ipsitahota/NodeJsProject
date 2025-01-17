// // function add(a,b){
// //     return a+b
// // }

// // var add=function(a,b){
// //     return a+b
// // }

// //var add=(a,b) =>{return a+b}

// var add=(a,b) => a+b
// var result=add(868,5)
// console.log(result)

// (function(){
//     console.log('prince is added')
// })()

// var add=function(a,b,gudly){//gudly is callback function
//     console.log(a+b)
//     gudly();
// }

// add(2,23,function(){
//      console.log('add completed')
//     })

// add(2,93,()=> console.log('add completed'))


// var fs = require('fs')
// var os =require('os')

// var user =os.userInfo()
// console.log(user)
// console.log(user.username)

// fs.appendFile('greeting.txt','Hello '+user.username+'!\n',()=>
//     {console.log('file is created')})

// // console.log(fs)
// // console.log(os)


// const notes = require ('./notes.js')//used for importing other files
// console.log('server file is available')

// var age=notes.age;
// var result = notes.addNumber(age+2,10)
// console.log(age);
// console.log(result);

// var _=require('lodash')
// var data =["person","person",1,2,1,2,'name','age','2']
// var filter =_.uniq(data)
// console.log(filter)
// console.log(_.isString(true))//as true is bool,'true' is string
// console.log(_.isString('true'))


/////json data transfers from server to server easily(here server is backend)
// const jsonString ='{"name":"ipsita","age":20,"city":"New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject)//parsed to objects
// console.log(jsonString)//actual json data

// const objectToConvert = {
//     name:"dibu",
//     age:22
// };
// const json = JSON.stringify(objectToConvert)
// console.log(json)
// console.log(typeof json)

const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json())// req.body

app.get('/', function (req, res) {//req is sent by client,response is sent by us
  res.send('Hello Dear:) How can I help you in our hotel!')
})

// app.get('/chicken', function (req, res) {
//     res.send('Sure sir, Chicken Noted.')
//   })

//   app.get('/idli', function (req, res) {
//     var customized_idli = {
//         name:'rava idli',
//         size:'10 cm',
//         is_sambar:true,
//         is_chutney:false
//     }
//     res.send(customized_idli)
//   })

const personRoutes = require('./routes/personRoutes')
const menuItemRoutes =require('./routes/menuItemRoutes')

app.use('/person',personRoutes)
app.use('/menuItem',menuItemRoutes)

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})//3000 is port