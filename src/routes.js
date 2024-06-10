const router = require('express').Router();


const homeController = require('./controllers/homeController');
const createController = require('./controllers/createController');
const castController = require('./controllers/castController');
const authController = require('./controllers/authController')

router.use(homeController);
router.use(createController);
router.use(castController);
router.use(authController);


router.all('*', (req, res) => {
    res.render('404');
})
module.exports = router;
