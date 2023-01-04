import express, { json, urlencoded } from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import shortid from 'shortid';
import indexRouter from '../routes/index.js';
import usersRouter from '../routes/users.js';
var app = express();
app.use(
	session({
		secret: shortid.generate(),
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);
// view engine setup
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	// next(createError(404));
	return res.redirect('/');
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});
export default app;
