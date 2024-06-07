const router = require('express').Router();
const movieService = require('../services/movieService');
const castService = require('../services/castService');

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', async (req, res) => {
    const newMovie = req.body;
    try {
        await movieService.create(newMovie);
        res.redirect('/')
    } catch(err) {
        console.log(err.message);
        res.redirect('/create')
    }
    
})

router.get('/details/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    res.render('details', {movie});
});



router.get('/attach/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    const casts = await castService.getAll().lean();
    res.render('cast-attach', {...movie, casts});
});

module.exports = router;