import pool from '../config/database.js';
const isLoggedin = async (req, res, next) => {
	try {
		if (req.session.loggedin) {
			const [rows, fields] = await pool.execute('select * from player where username = ?', [
				req.session.username,
			]);
			let njname = rows[0].ninja;
			njname = JSON.parse(njname);
			njname = njname[0];
			res.render('home', { title: 'Home', username: req.session.username, njname });
		} else {
			next();
		}
	} catch (err) {
		console.log(err);
		req.session.destroy();
		return res.redirect('/');
	}
};
export { isLoggedin };
