const Movie = require('../models/Movie')

exports.getOne = (movieId) => { Movie.findById(movieId)};
exports.getAll =  () => Movie.find();
exports.create = (movieData) => Movie.create(movieData); 
