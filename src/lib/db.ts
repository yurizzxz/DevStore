import mysql from 'mysql2/promise'

const pool = mysql.createPool({
	host: process.env.NEXT_PUBLIC_MYSQL_HOST,
	port: Number.parseInt(process.env.NEXT_PUBLIC_MYSQL_PORT || '33'),
	user: process.env.NEXT_PUBLIC_MYSQL_USER,
	password: '',
	database: process.env.NEXT_PUBLIC_MYSQL_BD,
	connectionLimit: 10,
})

export async function getConnection() {
	try {
		const connection = await pool.getConnection()
		return connection
	} catch (error) {
		console.error('Erro ao obter conexão:', error)
		throw error
	}
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function query(sql: string, params?: any[]) {
	// biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
	let connection
	try {
		connection = await getConnection()
		const [rows] = await connection.execute(sql, params)
		return rows
	} catch (error) {
		console.error('Erro na query:', error)
		throw error
	} finally {
		if (connection) {
			connection.release()
		}
	}
}

export default pool
