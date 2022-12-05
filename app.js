const express = require('express')
const app = express()
const port = 3000

//menggunakan ejs
app.set('view engine','ejs')

app.get('/', (req,res) => {
  res.render('index', {
    nama : "Bintang Pramudya Farandhi",
    title : "My Page"
  }) 
})

app.get('/about', (req,res) => {
  res.render('about')
})

app.get('/contact', (req,res) => {
  cont =[
    // {
    //   name: 'bintang',
    //   email: 'bintang@gmail.com',
    // },
    // {
    //   name: 'desman',
    //   email: 'desman@gmail.com',
    // },
    // {
    //   name: 'gio',
    //   email: 'gio@gmail.com'
    // }
  ]
  res.render('contact', {
    cont
  })
})

app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root: __dirname})
})

app.get('/product', (req,res) => {
    res.send("Product id : " + req.query.id + '<br><br>' + "Category id : " + req.query.idcat)
})

//error 404
app.use('/',(req,res) => {
    res.status(404)
    res.send('Page not found : 404')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})