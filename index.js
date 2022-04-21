const express = require('express');
const app = express();

const ejs = require('ejs');
const Plant = require('./models/plant');

app.set('port', process.env.PORT || 5001)

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// home route - explains purpose of app/getting started
app.get('/', (req, res) => {
    res.send("hello world")
});

// index route - returns all plants
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

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}`)
})