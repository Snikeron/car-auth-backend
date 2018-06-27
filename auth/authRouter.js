const express = require('express')
const router = express.Router()
const JWT = require('jsonwebtoken')
const {authenticate} = require('./authMiddleware')


router.post('/login', authenticate, (req, res) => {
    const {email, password} = req.body

    const payload = {
        bond: '007'
    }

    const jwtSecret = process.env.JWT_SECRET

    JWT.sign(payload, jwtSecret, (err, token) => {
        if(err) {
            res.status(401)
            throw new Error('Bad token')
        }

        const ipAddress = req.connection.remoteAddress

        res.set('Connection', `IP ${ipAddress}`)
        res.set('Authorization', `Bearer ${token}`)
        res.status(200).end()
    })
})

module.exports = router