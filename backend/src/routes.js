const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    return res.json({message: `ola ${req.query.name}`})
    // return res.send(`Hello ${req.query.name}`);
})

module.exports = routes;