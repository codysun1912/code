const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");


//connect database

mongoose.connect("mongodb+srv://codysun1912:nhut0385793524@cluster0.tota7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
    console.log("Connect to MongoDB")
})

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

app.listen(5000 , () =>{
    console.log("Server is running ....");
});