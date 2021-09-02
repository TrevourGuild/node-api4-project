/* eslint-disable no-undef */
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const server = express()

console.log(process.env.LADY)
console.log(process.env.API_SECRET)


const PORT = process.env.PORT || 5000

server.use(express.json())
server.use(cors())

server.get('/',(req,res) =>{
    res.send(`<h1> Web 45 ROCKS!</h1>`)
})

server.get('/api', (req, res) =>{
    res.json({message: 'Web 45 is awesome'})
})

server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})