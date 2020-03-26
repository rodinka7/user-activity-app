const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionModel = new Schema({
    userId: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Action', actionModel);