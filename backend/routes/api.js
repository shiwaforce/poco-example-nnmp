const Chance = require('chance');
const chance = new Chance();

module.exports = (router, connection) => {
	router.get('/users', function (req, res) {
		connection.query('SELECT * FROM users ORDER BY id DESC LIMIT 24', (err, result, fields) => {
			res.send(result);
		});
	});

	router.post('/users', (req, res) => {
		const user = {
			first_name: chance.first(),
			last_name: chance.last(),
			email: chance.email(),
			gender: chance.gender(),
			ip_address: chance.ip(),
			created: new Date()
		};

		connection.query('INSERT INTO users SET ?', user, (err, result) => {
			res.send('ok');
		});
	});
};
