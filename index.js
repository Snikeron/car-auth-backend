const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 3000

// routers
const authRouter = require('./auth/authRouter')
const carsRouter = require('./cars/carsRouter')

const app = express()
app.use(bodyParser.json())

// IMPORTANT!!!!!
const corsOptions = {
    exposedHeaders: "Authorization",
    // withCredentials: true
}
app.use(cors(corsOptions))


app.use('/auth', authRouter)
app.use('/cars', carsRouter)

app.use((err, req, res, next) => {
    res.json({error: err.message})
})


app.listen(PORT, ()=> {
    console.info(`Listening on port ${PORT}`)
})