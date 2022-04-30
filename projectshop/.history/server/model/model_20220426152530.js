const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    phone:{
        type: mongoose.Schema.Types.ObjectId
        
    }

})

let 