const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');


exports.auth = async (req, res, next) => {
    //get token
    const token = req.cookies['auth'];

    if (!token) {
        return next(); //the case where you are a guest and not logged
    }

    try {
        const decodedToken = await jwt.verify(token, SECRET);

        req.user = decodedToken;
        res.locals.isAuthenticated = true;

        next();
    } catch {
        res.clearCookie('auth');

        res.redirect('/login');
    }
};


exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/login');
    }
    next()
}