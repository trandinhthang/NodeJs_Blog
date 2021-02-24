const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// use midleware
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

// HTTP logger
app.use(morgan('combined'))

// template engine 
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route home // app.METHOD(PATH, HANDLER)
app.get('/', (req, res) => { 
    res.render('home');
});
// route search
app.get('/tim-kiem', (req, res) => {
  res.render('search');
});
// post data search
app.post('/tim-kiem', (req, res) => {
  console.log(req.body)
  res.send('');
});
//route news
app.get('/tin-tuc', (req, res) => { 
    res.render('news');
});

// listen 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
