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


exports.getAll = () => {
    return movies.slice();
}
exports.create = (movieData) => {
    movieData._id = movies[movies.length - 1]._id +  1;
    movies.push(movieData)
    
}
