const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const app = express()

dotenv.config({path: "config.env"})

// middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static("public"))
app.set("view engine", "ejs")

const port = process.env.PORT || 8080


app.get('/', (req, res) => {
    res.render("index")
})

app.listen(port, () => console.log(`server listening on http://localhost:${port}`))


