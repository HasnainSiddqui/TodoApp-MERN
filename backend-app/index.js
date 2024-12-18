require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose');
const courceModel = require('./model/courceModel');


const App = express();
App.use(express.json())




App.get('/' , (req , res)=>{
    res.send("connected ho gaya")
})

App.get('/cources',async (req,res)=>{
   try{
    let result  =await courceModel.find({})
res.status(200).send({
    isSuccessfull : true,
    data : result
})

   }catch(err){
    res.status(404).send({
        isSuccessfull : false,
        data : err.message
    })
   }
})

App.post('/cources' , (req ,res)=>{
    try{
         const body = req.body
         const userObj = {
            name : body.name,
         }
         const resObj =new courceModel({...userObj})
         resObj.save().then((dbRes)=>{
           res.status(200).send({
            isSuccessfull : true,
            data : dbRes
           })
         }).catch((err)=>{
            throw err.message
            
         })

    }catch(err){
        res.status(404).send({
            isSuccessfull : false,
            data : err.message
        })
    }
})
App.delete('/cources/:id', async (req,res)=>{
    try{
    let id = req.params.id
    console.log(id);
    
    const result =await courceModel.findByIdAndDelete(id)
    
        res.status(200).send({
            isSuccessfull : true,
            message : "Data Successfully Deleted"
        })
    }catch(err) {
        console.log(err.message);
        res.status(404).send({
            isSuccessfull : false ,
            message : err.message
        })
        
    }
    
})



    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
console.log('Mongo Db Connected');

   App.listen(5000 , (err) =>{
if(err){
console.log('Error Starting Server' , err);

}else{

        console.log('localhost:5000');
}
    })

    }).catch((err)=>{
        console.log('Mongo DB error' , err);
        
    })
    
 

   
