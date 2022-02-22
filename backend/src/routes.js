const express = require('express');
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')

const routes = express.Router();

routes.get('/',(req,res)=>{
    return res.json({message: `ola ${req.query.name}`})
    // return res.send(`Hello ${req.query.name}`);
})

routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);

module.exports = routes;

