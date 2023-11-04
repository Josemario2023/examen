const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app= express()
const port=  process.env.PORT 

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname +'/views/partials')

app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.render('index')
})
app.get('/paneles',(req, res)=>{
    res.render('paneles')
})
app.get('/trailers',(req, res)=>{
    res.render('trailers')
})

app.get('/*',(req,res)=>{
    res.render('404')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost ${port}`);
})
