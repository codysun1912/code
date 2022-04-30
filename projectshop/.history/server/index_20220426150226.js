const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");



app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

app.get("/api" , (req , res) => {
    res.status(200).json("Hello")
})

app.listen(5000 , () =>{
    console.log("Server is running ....");
});