const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();
//connect database
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log("Connect to MongoDB")
});

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

app.listen(5000 , () =>{
    console.log("Server is running ....");
});