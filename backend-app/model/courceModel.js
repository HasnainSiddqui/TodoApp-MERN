const mongoose = require('mongoose')
// import mongoose from "mongoose"

const courceSchema = mongoose.Schema({

name : {
    type : String,
    required : true, 
   
},


} , {timeStamps : true})

const courceModel = mongoose.model("userModel" , courceSchema)

module.exports = courceModel;



