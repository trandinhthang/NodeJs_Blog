const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'))

// template engine 
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route home
app.get('/', (req, res) => { 
    res.render('home');
})
//route news
app.get('/tin-tuc', (req, res) => { 
    res.render('news');
})

// listen 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
