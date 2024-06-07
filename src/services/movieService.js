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
exports.getAll = () => {
    return movies.slice();
}
exports.create = async (movieData) => {
    const result = await Movie.create(movieData);
    return result;
    
}
