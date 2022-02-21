const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },   
},{
    timestamps: true,
});

// Timestamp: Crira duas colunas para armazenar o a data de creiação e modificação.

module.exports = model('Dev', DevSchema);