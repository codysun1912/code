const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const phoneRoute = require("./routes/phone");
dotenv.config();
//connect database
const connectDB = async () => {
    try {
        await mongoose.connect((process.env.MONGODB_URL),
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
    }

};
    



app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/product/phone", phoneRoute);


app.listen(5000, () => {
    console.log("Server is running ....");
});