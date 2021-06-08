const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const events = require('./seeds/events');
const about = require('./seeds/about');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('ejs', ejsMate)

app.use(express.urlencoded({ extended: true }));

app.get('/about', (req, res) => {
    res.render('pages/aboutus', { about })
})

app.get('/', (req, res) => {
    res.render('pages/aboutus', { about })
})

app.get('/events', (req, res) => {
    res.render('pages/events', { events })
})

app.get('/sponsors',(req,res)=>{
    res.render('pages/sponsors')
})
app.get('/form', (req, res) => {
    res.render('pages/form')
})

const port=process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listening on Port 3000")
})