import pool from '../config/database.js';
const getIndex = (req, res) => {
	res.render('index', { title: 'Home' });
};
const postIndex = async (req, res) => {
	if (req.body.typeOfForm === 'login') {
		const [rows, fields] = await pool.execute('select * from player where username = ?', [
			req.body.username,
		]);
		console.log(rows);
		if (rows.length == 1) {
			if (rows[0].password === req.body.password) {
				req.session.loggedin = true;
				req.session.username = req.body.username;
				return res.render('home', { title: 'Home' });
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
	}
};
export { getIndex, postIndex };
