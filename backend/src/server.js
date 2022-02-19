const express = require('express')
const server = express();

server.get('/',(req,res)=>{
    return res.json({message: `ola ${req.query.name}`})
    // return res.send(`Hello ${req.query.name}`);
})

server.listen(3333);