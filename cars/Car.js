const mongoose = require('../db/connectdb');
const {Schema} = mongoose;

const carSchema = new Schema({
    make: String,
    model: String,
    colour: String
})