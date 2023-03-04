import mysql from 'mysql2/promise';
import 'dotenv/config';

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nso',
	port: 3306,
});
export default pool;
