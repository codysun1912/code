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
        type: mongoose.Schema.Types.ObjectId,
        ref: "description"

    },
    price: {
        type: Number
    }
})

