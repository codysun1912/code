import express from "express"


const app = express()
const PORT = process.env.port || 8000'

app.listen(8000, () =>{
    console.log("Server is running ....")
})