const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {
    res.render('register')
})


router.post('/register', async (req, res) => {
    const userData = req.body;
    await authService.register(userData);
    res.redirect('/login')

});

router.get('/login', (req, res) => {

    res.render('login');
})

module.exports = router;