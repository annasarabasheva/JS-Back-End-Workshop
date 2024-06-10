const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const routes = require('./routes')



app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({extended: false}));

app.use(cookieParser());

mongoose.connect(`mongodb://localhost:27017/magic-movies`)
    .then(() => {console.log(`DB Connected`)});


app.use(routes)
app.listen(5000, () => {console.log('Server is listening on port 5000...')})