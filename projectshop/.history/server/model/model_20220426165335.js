const mongoose = require("mongoose");



const phoneSchema = new mongoose.Schema({
    name: {
        type: String,
        
    
    brand: 
        type: String,
    
    infoPhone:
    [
        brand: {
            type: String
        },
        screen: {
            type: String
        },
        size: {
            type: String
        },
        year: {
            type: Number
        },
    ]
    ,
    price: {
        type: Number
    }
});

let Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;