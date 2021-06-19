const express = require('express')
const app = express()
const { router } = require('./routers')
app.use(express.json())
app.use(router)



const mongoose = require('mongoose')
const PORT = 5050
const DB_ADDRESS = 'mongodb+srv://NargizaKasymova:rhfcjnrf11!@cluster0.ntx0h.mongodb.net/education?retryWrites=true&w=majority'

async function startBackend() {
    await mongoose.connect(DB_ADDRESS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        
    })

    console.log('Подключение к БД завершено')

    app.listen(PORT, function() {
        console.log('App has been started ' + PORT)
    })

}

startBackend()


