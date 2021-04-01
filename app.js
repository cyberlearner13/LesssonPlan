const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.render('home');
});

app.listen(8888, ()=>console.log('Server Started at 8888'));