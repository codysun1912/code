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
        chipCpu: {
            type: String

        },
        ram: {
            type: String
        },
        screen: {
            type: String
        },
        year: {
            type: Number
        }
    }

});

const customerSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: Number
    }
});


let Phone = mongoose.model("Phone", phoneSchema);
let Customer = mongoose.model("Customer", customerSchema);
module.exports = { Phone, Customer };