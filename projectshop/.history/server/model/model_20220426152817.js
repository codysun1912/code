const mongoose = require("mongoose")

const descriptionPhoneSchema = new mongoose.Schema({
    
})
const phoneSchema = new mongoose.Schema({
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

let Phone = mongoose.model("Phone" , phoneSchema);
module.exports = {Phone}