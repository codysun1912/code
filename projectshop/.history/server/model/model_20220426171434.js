const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
    {
        name: String
    },
    {
        brand: String
    },
    infoPhone:
    {
       {
            brand: String
        },
        {
            screen: String
        },
        {
            size: String
        },
        {
            year: Number
        },
    },
    price: Number,
});

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;