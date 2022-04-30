import express from "express"


const app = express()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const dotenv = require("dotenv")

app.listen(8000, () =>{
    console.log("Server is running ....")
})