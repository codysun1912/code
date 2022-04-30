const mongoose = require("mongoose")



const phoneSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "description"
    },
    brand:{
        type:String
    }
    },
    price: {
        type: Number
    }
})

