const express = require('express');
const { default: mongoose } = require('mongoose');
const routes = require('./routes');
const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.iqw1b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true
});

server.use(express.json());
server.use(routes);

server.listen(3333);