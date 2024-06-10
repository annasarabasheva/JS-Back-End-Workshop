const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const  SECRET = 'jikhfljmlk;w;fj56fsefef'

exports.register = (userData) => User.create(userData);
exports.login = async (email, password) => {

    //Get user from db
    const user = await User.findOne({email});

    //Check if user exists
    if (!user) {
        throw new Error('Cannot find username or password');
    }
    //Check if password is valid
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid) {
        throw new Error('Cannot find username or password')

    }
    //Generate jwt token: dont forget to npm i jsonwebtoken!
    const payload = {
        _id: user._id,
        email:user.email,
    };

    const token = await jwt.sign(payload, SECRET)
    //return token
    return token;
}