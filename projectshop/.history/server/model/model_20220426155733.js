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
    name: {
        type: String,
        required: true

    },
    price: {
        type: Number
    }
})

