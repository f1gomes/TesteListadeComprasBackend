const express = require('express');

const server = express();

server.get('/', function(request, response) {
    response.send('Salve Salve rapazeada!');
})

server.listen(process.env.PORT || 3000);