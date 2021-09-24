const express = require('express')
const path = require('path')

const app = express()

const staticFiles = express.static('public')
app.use(staticFiles)

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})

app.get('/', (req, res) =>{
    const fileToSend = path.join(__dirname,'/views/home.html')
    res.sendFile(fileToSend)
    //res.sendFile(path.join(__dirname,'/views/home.html'))
})
/* app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.post('/register', (req, res) =>{
    res.redirect('/')
}) */