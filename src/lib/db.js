import mysql from 'mysql2/promise'

let pool

export const createPool = async () => {
	if (!pool) {
		pool = mysql.createPool({
			host: process.env.NEXT_PUBLIC_MYSQL_HOST,
			user: process.env.NEXT_PUBLIC_MYSQL_USER,
			database: process.env.NEXT_PUBLIC_MYSQL_BD,
			waitForConnections: true,
			connectionLimit: 10,
			queueLimit: 0,
		})
	}
	return pool
}

export const getConnection = async () => {
	const pool = await createPool()
	return pool.getConnection()
}
