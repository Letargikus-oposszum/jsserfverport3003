//const express = require('express');
import express from 'express'
import __dirname from './util/rootparth.js'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello üdvözöllek a weboldalamon.')
})

app.get('/weboldal', (req, res) => {
    res.sendFile("./views/index.html", {root:__dirname});
})

app.listen(3000, () => {console.log("Server runs on port 3003");})

