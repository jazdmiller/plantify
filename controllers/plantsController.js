const express = require('express');
const { route } = require('express/lib/application')
const Plant = require('../models/plant');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('home')
})

router.post('/add', (req, res) => {
    console.log("the create route was reached")
    Plant.create(req.body)
        .then(() => res.redirect('/plants'))
        .catch(err => res.send(err))
})

router.get('/plants', (req, res) => {
    Plant.find({})
    .then((items) => res.render('index', { plants: items }))
})
router.get('/new', (req, res) => {
    res.render('new');
})

// index/read route - returns all plants
// app.get('/plants', (req, res) => {
//     Plant.find({})
//         .then(data => {
//             res.render('index', {plant: item})
//         })
// })

// create route - adds new plants to model

router.get('/:id', (req, res) => {
    Plant.findById(req.params.id)
    .then(items => {
        res.render('plant', items)
    })
})

router.delete('/:id', (req, res) => {
    Plant.findOneAndRemove({ _id: req.params.id})
    .then(() => res.redirect("/plants"))
})

router.put('/edit/:id', (req, res) => {
    Plant.findOneAndUpdate({ _id: req.params.id}, req.body)
    .then((items) => res.redirect('/plants'))
})





router.get('/edit/:id', (req, res) => {
    Plant.findById(req.params.id)
    .then(items => {
        res.render('edit', items)
    })
})


module.exports = router;