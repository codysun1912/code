const mongoose = require("mongoose")

const descriptionPhoneSchema = new mongoose.Schema({
     name
})

const phoneSchema = new mongoose.Schema({
    nameProduct: {
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

let Phone = mongoose.model("Phone" , phoneSchema);
module.exports = {Phone}