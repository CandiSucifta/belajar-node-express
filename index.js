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

app.put('/users/:id', (req, res) => {
    res.send(req.params.id)
})

app.delete('/users/:Userid', (req, res) => {
    res.send(req.params.Userid)
})

app.listen(3000, () => {
    console.log('Server telah berjalan')
})