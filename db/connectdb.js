/////////////////////////////
// RUEGEN MONGOOSE TEMPLATE
/////////////////////////////

const mongoose = require('mongoose')

const url = `mongodb+srv://${PASSWORD}@brewster-t2....` //mongodb atlas details
const options = {
    user: 'username',
    pass: process.env.MONGODB_USER_PASSWORD, //nodemon.js env
    dbName: 'DB_NAME',
    promiseLibrary: global.Promise
}

mongoose
    .connect(url, options)
    .then(() => {
        console.info(
            'mongodb db connection established'
        )
    })
    .catch(err => {
        console.error(
            `mongodb db failure: ${err.message}`
        )
    })
    
module.exports = mongoose
// import into models that we make

