const express = require('express');
const mysql = require('mysql');
const path = require('path');

const assets = require('./assets/assets');
const pageRoutes = require('./routes/pages');
const apiRoutes = require('./routes/api');

const app = express();
const router = express.Router();

const connection = mysql.createConnection({
	host: 'mysql',
	user: 'root',
	password: 'root',
	database: 'poco'
});

connection.connect();

app.set('view engine', 'pug');
app.set('views', path.normalize(path.join(__dirname, 'views')));

assets(app);
pageRoutes(app);
apiRoutes(router, connection);
app.use('/api', router);

app.listen(3000, () => {
	console.log('Node App Started!')
});
