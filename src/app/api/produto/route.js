import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export async function GET() {
	try {
		const prisma = new PrismaClient()
		const [produto] = await prisma.produto.findMany()
		return NextResponse.json(produto)
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: error.message })
	}
}
