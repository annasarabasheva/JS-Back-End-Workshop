const Movie = require('../models/Movie')

exports.getOne = (movieId) => {
    const movie = Movie.findById(movieId);
    return movie;
}
exports.getAll =  () => Movie.find();
exports.create = (movieData) => Movie.create(movieData); 
