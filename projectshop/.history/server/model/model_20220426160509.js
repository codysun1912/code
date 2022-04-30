const mongoose = require("mongoose")



const phoneSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    brand: {
        type: String
    },
    infoPhone: 
    price: {
        type: Number
    }
})

