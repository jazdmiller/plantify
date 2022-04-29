const express = require('express');
const methodOverride = require('method-override')
const plantsController = require('./controllers/plantsController');
const app = express();
const ejs = require('ejs');
const Plant = require('./models/plant');

app.use(express.static(__dirname + '/' + 'public'));
app.use(methodOverride('_method'))
app.set('port', process.env.PORT || 5001)
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(plantsController)


// home route - explains purpose of app/getting started
// app.get('/', (req, res) => {
//     res.send("hello world")
// });




app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}`)
})