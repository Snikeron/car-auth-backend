const Car = require('./Car')

const cars = [
    {
        make: 'Toyota',
        model: 'Camry',
        color: 'Silver',
        floorPrice: 2000000
    },
    {
        make: 'Toyota',
        model: 'GT86',
        color: 'Black',
        floorPrice: 3000000
    },
    {
        make: 'Ferrari',
        model: 'F360',
        color: 'Red',
        floorPrice: 19000000
    },
    {
        make: 'Honda',
        model: 'S2000',
        color: 'Silver',
        floorPrice: 1500000
    },

]

Car.create()
    .then(() => {
        console.info('seeded cars into db')
    })