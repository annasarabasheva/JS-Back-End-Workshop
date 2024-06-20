const Movie = require('../models/Movie')

exports.getOne = (movieId) =>  Movie.findById(movieId).populate('casts');
exports.getAll =  () => Movie.find();
exports.create = (movieData) => Movie.create(movieData); 
exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);
exports.edit = (movieId, movieData) => Movie.findByIdAndUpdate(movieId, movieData);

exports.search = (title, genre, year) => {
    let query = {};

    if (title) {
        query.title = new RegExp(title, 'i');
    }

    if (genre) {
        query.genre = genre.toLowerCase();
    }

    if (year) {
        query.year = year;
    }

    return Movie.find(query);
};
