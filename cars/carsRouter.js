const express = require('express')
const router = express.Router()
const { authorize } = require('../auth/authMiddleware')

router.get('/', authorize, (req, res) => {
    
    const cars = [
        {
        id: 1,
        make: 'Ford',
        model: 'Falcon',
        colour: 'Blue'
    },
    {
        id: 2,
        make: 'Ford',
        model: 'Falcon',
        colour: 'Yellow'
    },
]

    res.status(200).json(cars)


})

module.exports = router