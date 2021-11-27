const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
    owned : {
        type : String, 
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: () => Date.now(),
    },
});

module.exports = mongoose.model('idea', ideaSchema);
