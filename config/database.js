import mysql from 'mysql2/promise';
import 'dotenv/config';

const pool = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.NAME,
	port: 3306,
});
pool.testConnection = () => {
	try {
		pool.query('select 1 + 1 as test');
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};
export default pool;
