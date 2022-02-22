const express = require('express');
const mongoose = require('mongoose');
// Permite que a aplicação seja acessada por qualquer indereço
const cors = require('cors');
const routes = require('./routes');
const server = express();



mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.iqw1b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);