const express = require('express')
const path = require('path')

// Crear el servidor de express
const app = express()

// Directorio Publico
app.use(express.static('public'))

// Rutas
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})
app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname,'/views/register.html'))

})
app.post('/register', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Servidor Express corriendo en: ', 'http://localhost:3000')
})