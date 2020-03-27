const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionModel = new Schema({
    uid: {
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
}, { versionKey: false });

module.exports = mongoose.model('Action', actionModel);