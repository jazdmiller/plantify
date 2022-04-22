const express = require('express');
const { route } = require('express/lib/application')
const Ingredient = require('../models/ingredients-models');

const router = express.Router();

// index/read route - returns all plants
app.get('/plants', (req, res) => {
    Plant.find({})
        .then(data => {
            res.json(data)
        })
})

// create route - adds new plants to model
app.post('/plants', (req, res) => {
    console.log("the create route was reached")
    Plant.create(req.body)
        .then(plant => res.json(plant))
        .catch(err => res.send(err))
})
// update route - edit plants
app.put('/plants/:id', (req, res) => {
    Plant.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })
})

// delete route - delete plants from collection
app.delete()