import pool from '../config/database.js';
const getIndex = (req, res) => {
	res.render('index', { title: 'Home' });
};
const postIndex = async (req, res) => {
	if (req.body.typeOfForm === 'login') {
		const [rows, fields] = await pool.execute('select * from player where username = ?', [
			req.body.username,
		]);
		if (rows.length == 1) {
			if (rows[0].password === req.body.password) {
				req.session.loggedin = true;
				req.session.username = req.body.username;
				return res.render('home', { title: 'Home', username: req.session.username });
			} else {
				return res.render('index', { title: 'Home', msg: 'Wrong password' });
			}
		} else {
			return res.render('index', { title: 'Home', msg: 'Username was not found.' });
		}
	} else if (req.body.typeOfForm === 'register') {
		const [rows, fields] = await pool.execute('select * from player where username = ?', [
			req.body.username,
		]);
		if (rows.length == 1) {
			return res.render('index', { title: 'Home', msg: 'Username is exist.' });
		}
		if (req.body.password !== req.body.confirmPassword) {
			return res.render('index', { title: 'Home', msg: 'Passwords are not the same.' });
		} else {
			await pool.execute('insert into player (username, password) values (?, ?)', [
				req.body.username,
				req.body.password,
			]);
			return res.render('index', { title: 'Home', msg: 'Register successfully.' });
		}
	} else if (req.body.typeOfForm == 'logout') {
		if (req.body.loggedin) {
			return req.session.destroy();
		}
	} else if (req.body.typeOfForm == 'changePassword') {
		const [rows, fields] = await pool.execute('select * from player where username = ?', [
			req.session.username,
		]);
		if (rows.length == 1) {
			if (rows[0].password === req.body.oldPass) {
				if (req.body.newPassword == req.body.confirmPassword) {
					pool.execute('update player set password = ? where username = ?', [
						req.body.newPassword,
						req.session.username,
					]);
					return res.render('home', {
						title: 'Home',
						username: req.session.username,
						msg: 'OK',
					});
				} else {
					return res.render('home', {
						title: 'Home',
						username: req.session.username,
						msg: 'Failed',
					});
				}
			} else {
				return res.render('home', {
					title: 'Home',
					username: req.session.username,
					msg: 'Failed',
				});
			}
		}
	}
	return res.redirect('/');
};
const getItems = async (req, res) => {
	let [rows, fields] = await pool.execute('select * from item');
	const items = rows.map((item) => {
		let tmpItem = {};
		tmpItem.id = item.id;
		tmpItem.name = item.name;
		tmpItem.description = item.description;
		tmpItem.class = item.class;
		tmpItem.level = item.level;
		return tmpItem;
	});
	return res.render('items', { items: items });
};
export { getIndex, postIndex, getItems };
