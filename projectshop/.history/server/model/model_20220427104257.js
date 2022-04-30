const mongoose = require("mongoose");
const phoneSchema = new mongoose.Schema({

});
let Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;