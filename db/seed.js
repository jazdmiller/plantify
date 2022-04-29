const Plant = require('../models/plant')
const seedData = require('./seeds.json')

Plant.deleteMany({})
    .then(() => {
        Plant.insertMany(seedData)
            .then(console.log)
            .catch(console.error)
    })
    .finally(() => process.exit())