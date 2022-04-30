const mongoose = require("mongoose")

const phoneSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    price:{
        type:Number
    }
})