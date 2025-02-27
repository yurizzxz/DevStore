import { getConnection } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
	let connection
	try {
		connection = await getConnection()
		const [categoria] = await connection.query('SELECT * FROM produto')

		return NextResponse.json(categoria)
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: error.message })
	} finally {
		if (connection) connection.release()
	}
}
