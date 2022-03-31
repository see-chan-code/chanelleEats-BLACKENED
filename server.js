const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname + '/src'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, _ => {
    console.log(`App deployed at Port ${PORT} `)
})
