const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: Number
    }
});

let Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;