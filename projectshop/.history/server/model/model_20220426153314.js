const mongoose = require("mongoose")

const descriptionPhoneSchema = new mongoose.Schema({
    nameBrand: {
        type: String
    },
    screen: {
        type: String
    },
    size: {
        type: String
    },
    camera: {
        type: String
    },

})

const phoneSchema = new mongoose.Schema({
    nameProduct: {
        type: String,
        required: true
    },
    priceProduct: {
        type: Number
    },
    description: {
        type: mongoose.Schema.Types.ObjectId

    }

})

let Phone = mongoose.model("Phone", phoneSchema);
module.exports = { Phone }