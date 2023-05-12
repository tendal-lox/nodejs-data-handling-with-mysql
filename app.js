const express = require('express')
const app = express()
const router = require('./controller/route')
require('dotenv').config()

app.use(router)

async function start() {
    try {
        await app.listen(process.env.PORT)
        console.log('Server connected')
    } catch (err) {
        console.error(err)
    }
}
start()