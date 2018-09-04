const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();

const connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'root',
  database : 'poco'
});

connection.connect();

app.set('view engine', 'pug');
app.set('views',  path.normalize(path.join(__dirname, 'views')));

app.get('/', function (req, res) {
  connection.query('SELECT * FROM POCO LIMIT 10', (err, result) => {
    res.render('index', { data: result })
  });
});

app.listen(3000, () => {
    console.log('Node App Started!')
});
