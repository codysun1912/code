const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    description:{
        type: mongoose.Schema.Types.ObjectId
        
    }

})

let Phone = mongoose.model("Phone" , productSchema);
module.exports = {Phone}