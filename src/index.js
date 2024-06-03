const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');


app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.render('home', { layout: false });
  
})


app.listen(5000, () => {console.log('Server is listening on port 5000...')})