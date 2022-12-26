const isLoggedin = (req, res, next) => {
	if (req.session.loggedin) {
		res.render('home', { title: 'Home', username: req.session.username });
	} else {
		next();
	}
};
export { isLoggedin };
