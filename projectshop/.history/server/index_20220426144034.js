import express from 'express';


const app = express();
const PORT = process.env.port || 5000;

app.listen(5000, () =>{
    console.log("Server is running ....")
})