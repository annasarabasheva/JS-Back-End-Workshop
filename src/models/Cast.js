const mongoose = require('mongoose');

const castSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 14,
        max: 120,
    },
    born: {
        type: String,
        required: true,
    },
    nameInMovie: {
        type: String,
        required: true,
    },
    castImage: {
        type: String,
        required: true,
        match: /^https?/,
    },

});


const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;


