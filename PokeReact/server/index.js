// const express = require('express')
import express from 'express'
import dotenv from "dotenv";
import cors from "cors";


const port = process.env.PORT || 3000;
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(()=>{
    console.log("Server running on port 3000")
})   