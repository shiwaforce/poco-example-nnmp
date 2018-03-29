const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views',  path.normalize(path.join(__dirname, '..', 'client', 'views')));

app.get('/', function (req, res) {
    res.render('index')
});

app.listen(3000, () => {
    console.log('Node App Started!')
});