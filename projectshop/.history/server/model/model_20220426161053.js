const mongoose = require("mongoose")



const phoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String
    },
    infoPhone: [
        {
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
                type: number
            },
        }
    ],
    price: {
        type: Number
    }
})

const Phone = mongoose.model