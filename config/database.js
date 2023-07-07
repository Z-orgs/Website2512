import mysql from 'mysql2/promise';
import 'dotenv/config';

const pool = mysql.createPool({
	host: process.env.HOST || 'localhost',
	user: process.env.USERNAME || 'root',
	password: process.env.PASSWORD || 'root',
	database: process.env.DB || 'nso',
	port: process.env.DBPORT || 3306,
});
export default pool;
