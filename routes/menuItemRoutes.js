const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItem.js' )

router.post('/',async (req,res) =>{
    try{
      const data = req.body;
    const newMenuItem = new MenuItem(data);
  
   const response = await newMenuItem.save();
   console.log('data saved');
   res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })
  
router.get('/',async (req,res)=>{
    try{
      const data =await MenuItem.find();
      console.log('data fetched');
   res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })
  router.get('/:tasteType',async (req,res)=>{
    try{
      const tasteType =req.params.tasteType;
      if(tasteType=='spicy'|| tasteType=='sweet'|| tasteType=='sour'){
      const response =await MenuItem.find({taste:tasteType});
      console.log('response fetched');
      res.status(200).json(response);
  }else{
    res.status(404).json({error:'Invalid taste type'});
  }
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })

module.exports = router;