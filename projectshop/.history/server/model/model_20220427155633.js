const mongoose = require("mongoose");
const phoneSchema = new mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        listImage: {
            type: String
        },
        brand: {
            type: String
        },
        chipCpu:{
            type:String

        },
        year: {
            type: Number
        }
    }

})

let Phone = mongoose.model("Phone", phoneSchema);
module.exports = Phone;