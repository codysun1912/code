const mongoose = require("mongoose");
const phoneSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    brand: {
        type: String
    },
    year: {
        type: Number
    }

})

let Phone = mongoose.model("Phone", phoneSchema);
module.exports = Phone;