const mongoose = require('../db/connection')

const PlantSchema = new mongoose.Schema({
    name: String, 
    description: String,
    img: String
})

const Plant = mongoose.model("Plant", PlantSchema)

module.exports = Plant