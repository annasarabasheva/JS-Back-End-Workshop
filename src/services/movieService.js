const Movie = require('../models/Movie')

exports.getOne = (movieId) =>  Movie.findById(movieId).populate('casts');
exports.getAll =  () => Movie.find();
exports.create = (movieData) => Movie.create(movieData); 