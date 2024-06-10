const express = require('express');
const app = express();
const routes = require('./routes')
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const {auth} = require('./middlewares/authMiddleware');




app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({extended: false}));

app.use(cookieParser());
app.use(auth) //its important to be after the cookieParser()

mongoose.connect(`mongodb://localhost:27017/magic-movies`)
    .then(() => {console.log(`DB Connected`)});


app.use(routes)
app.listen(5000, () => {console.log('Server is listening on port 5000...')})