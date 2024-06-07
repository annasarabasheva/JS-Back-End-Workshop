const Movie = require('../models/Movie')



const movies = [
    {   _id: 1,
        title: 'vbdbd',
        genre: '',
        director: '',
        year: '',
        imageURL: '',
        rating: '',
        description: ''
      }
];

exports.getOne = (movieId) => {
    return movies.find(movie => movie._id == movieId);
}
exports.getAll =  () => {  return  Movie.find() }
exports.create = async (movieData) => { return await Movie.create(movieData); }
