const express = require('express');
const database = require('./database');

const server = express();

server.get ('/', function (request, response) {
    const dados = database.read();
    return response.json(dados);
})

server.listen(process.env.PORT || 3000);