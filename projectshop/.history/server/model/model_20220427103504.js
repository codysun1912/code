const mongoose = require("mongoose");
const phoneSchema = new mongoose.Schema(
    {
        name: String,
        brand: String,
        infoPhone:
        {
            brand: String,
            screen: String,
            size: String,
            year: String,
        },
        price: String,
    }
);
let Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;