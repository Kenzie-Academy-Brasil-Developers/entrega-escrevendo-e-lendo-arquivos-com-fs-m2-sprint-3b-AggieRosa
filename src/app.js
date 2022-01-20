const express = require('express')
const app = express()
const ControleCadastro = require("../src/controllers/read.controlle")

app.use(express.json())

app.get('/api/list', (req,res) => {
    const data = ControleCadastro.getAll()
    res.status(200).json(data)
})

app.post('/api/create', (req,res) => {
    const data = ControleCadastro.create(req.body)
    res.status(201).json(data)
})

module.exports = app