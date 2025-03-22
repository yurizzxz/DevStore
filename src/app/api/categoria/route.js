import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export async function GET() {
	try {
		const prisma = new PrismaClient()
		const [categoria] = await prisma.categoria.findMany()
		return NextResponse.json(categoria)
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: error.message })
	}
}
