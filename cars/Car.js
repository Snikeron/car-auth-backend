const mongoose = require('../db/connectdb');
const {Schema} = mongoose;

const carSchema = new Schema({
    make: {
        type: String,
        required: true,
        index: true
    },
    model: String,
    colour: String,
    floorPrice: {
        type: Number,
        required: true
    }
})

const Car = mongoose.model('Cars', carSchema)