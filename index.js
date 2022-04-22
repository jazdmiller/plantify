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




app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}`)
})