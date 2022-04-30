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
        listImage: [{
            type: String
        }],
        brand: {
            type: String
        },
        chipCpu:{
            type:String

        },
        ram:{
            type:String
        },
        screen:{
            type:String
        },
        year: {
            type: Number
        }
    }

});

const customerSchema =new mongoose.Schema({
    username: {
        type: String
    }
})



let Phone = mongoose.model("Phone", phoneSchema);
module.exports = Phone;