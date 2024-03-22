const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/users', (req, res) => {
    res.send('Get Users')
})

app.post('/users', (req, res) => {
    res.send('Post Users')
})

app.put('/users', (req, res) => {
    res.send('Put Users')
})

app.delete('/users', (req, res) => {
    res.send('Delete Users')
})

app.listen(3000, () => {
    console.log('Server telah berjalan')
})