const axios = require('axios')

module.exports = {
    store(req, res){
        const { username } = req.body;

        return res.json({ok: true});
    }
}