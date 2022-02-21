const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();

routes.get('/',(req,res)=>{
    return res.json({message: `ola ${req.query.name}`})
    // return res.send(`Hello ${req.query.name}`);
})

routes.post('/devs', (req,res)=>{
    console.log(req.body);
    return res.json({ok:true});
})

module.exports = routes;

