const mongoose = require("mongoose");
const phoneSchema = new mongoose.Schema({
    name: {
        type: String
    }

})
let Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;