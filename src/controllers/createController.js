const router = require('express').Router();
const movieService = require('../services/movieService');
const castService = require('../services/castService');
const {isAuth} = require('../middlewares/authMiddleware');

router.get('/create', isAuth, (req, res) => {
    res.render('create')
});

router.post('/create', isAuth, async (req, res) => {
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



router.get('/attach/:movieId', isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    const casts = await castService.getAll().lean();
    res.render('cast-attach', {...movie, casts});
});


router.post('/attach/:movieId', isAuth, async (req, res) => {
    const castId = req.body.cast;
    const movie = await movieService.getOne(req.params.movieId);
    movie.casts.push(castId);
    await movie.save();
    res.redirect(`/attach/${req.params.movieId}`)
    
})


router.get('/edit/:movieId', isAuth, async (req, res) => {
    const movie =  await movieService.getOne(req.params.movieId).lean();
    res.render('edit', {movie})
});




module.exports = router;