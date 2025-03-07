import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	const processors = await prisma.categoria.create({
		data: {
			nome: 'Processadores',
		},
	})

	const graphicsCards = await prisma.categoria.create({
		data: {
			nome: 'Placas de Vídeo',
		},
	})

	const memory = await prisma.categoria.create({
		data: {
			nome: 'Memória RAM',
		},
	})

	const laptops = await prisma.categoria.create({
		data: {
			nome: 'Notebooks',
		},
	})

	await prisma.produto.createMany({
		data: [
			{
				nome: 'Intel Core i9-13900K 24 núcleos, 32 threads até 5.8GHz',
				description:
					'Processador Intel Core i9 de 13ª geração, 24 núcleos, 32 threads, até 5.8GHz.',
				specifications:
					'24 núcleos, 32 threads, Frequência de até 5.8GHz, Suporte a PCIe 5.0',
				preco: 6499.99,
				estrelas: 4,
				foto: 'https://hakzttyrnyjeldmcjxpw.supabase.co/storage/v1/object/public/devstore//i9-13900k.png',
				categoriaId: processors.id,
			},
			{
				nome: 'AMD Ryzen 9 7900X 12 núcleos, 24 threads até 5.6GHz',
				description:
					'Processador AMD Ryzen 9 7900X com 12 núcleos e 24 threads, até 5.6GHz.',
				specifications:
					'12 núcleos, 24 threads, Frequência de até 5.6GHz, Suporte a PCIe 5.0',
				preco: 5599.99,
				estrelas: 5,
				foto: 'https://hakzttyrnyjeldmcjxpw.supabase.co/storage/v1/object/public/devstore//ryzen%209%207900x.png',
				categoriaId: processors.id,
			},
			{
				nome: 'Intel Core i7-12700K 12 núcleos, 20 threads até 5.0GHz',
				description:
					'Processador Intel Core i7 de 12ª geração, 12 núcleos, 20 threads, até 5.0GHz.',
				specifications:
					'12 núcleos, 20 threads, Frequência de até 5.0GHz, Suporte a PCIe 5.0',
				preco: 4799.99,
				estrelas: 5,
				foto: 'https://hakzttyrnyjeldmcjxpw.supabase.co/storage/v1/object/public/devstore//i7%2012700k.png',
				categoriaId: processors.id,
			},
			{
				nome: 'AMD Ryzen 7 5800X 8 núcleos, 16 threads até 4.7GHz',
				description:
					'Processador AMD Ryzen 7 5800X com 8 núcleos e 16 threads, até 4.7GHz.',
				specifications:
					'8 núcleos, 16 threads, Frequência de até 4.7GHz, Suporte a PCIe 4.0',
				preco: 4099.99,
				estrelas: 4,
				foto: 'https://hakzttyrnyjeldmcjxpw.supabase.co/storage/v1/object/public/devstore//ryzen%207%205800x.png',
				categoriaId: processors.id,
			},
			{
				nome: 'NVIDIA GeForce RTX 3080 10GB VRAM GDDR6X',
				description:
					'Placa de vídeo NVIDIA GeForce RTX 3080 com 10GB de VRAM GDDR6X.',
				specifications: '10GB VRAM GDDR6X, Suporte a Ray Tracing, PCIe 4.0',
				preco: 8999.99,
				estrelas: 4,
				foto: 'https://hakzttyrnyjeldmcjxpw.supabase.co/storage/v1/object/public/devstore//rtx%203080.png',
				categoriaId: graphicsCards.id,
			},
			{
				nome: 'AMD Radeon RX 6900 XT 16GB VRAM GDDR6',
				description:
					'Placa de vídeo AMD Radeon RX 6900 XT com 16GB de VRAM GDDR6.',
				specifications: '16GB VRAM GDDR6, Suporte a Ray Tracing, PCIe 4.0',
				preco: 8499.99,
				estrelas: 5,
				foto: 'https://hakzttyrnyjeldmcjxpw.supabase.co/storage/v1/object/public/devstore//rx%206900xt.png',
				categoriaId: graphicsCards.id,
			},
			{
				nome: 'NVIDIA GeForce RTX 3070 Ti 8GB VRAM GDDR6X',
				description:
					'Placa de vídeo NVIDIA GeForce RTX 3070 Ti com 8GB de VRAM GDDR6X.',
				specifications: '8GB VRAM GDDR6X, Suporte a Ray Tracing, PCIe 4.0',
				preco: 6699.99,
				estrelas: 5,
				foto: 'https://hakzttyrnyjeldmcjxpw.supabase.co/storage/v1/object/public/devstore//rtx%203070ti.png',
				categoriaId: graphicsCards.id,
			},
			{
				nome: 'AMD Radeon RX 6800 XT 16GB VRAM GDDR6',
				description:
					'Placa de vídeo AMD Radeon RX 6800 XT com 16GB de VRAM GDDR6.',
				specifications: '16GB VRAM GDDR6, Suporte a Ray Tracing, PCIe 4.0',
				preco: 7599.99,
				estrelas: 5,
				foto: 'https://hakzttyrnyjeldmcjxpw.supabase.co/storage/v1/object/public/devstore//rx%206800xt.png',
				categoriaId: graphicsCards.id,
			},
			{
				nome: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz',
				description:
					'Kit de memória RAM Corsair Vengeance LPX, 16GB (2x8GB), DDR4, 3200MHz.',
				specifications: '16GB, DDR4, 3200MHz',
				preco: 429.99,
				estrelas: 4,
				foto: 'https://example.com/corsair-vengeance.jpg',
				categoriaId: memory.id,
			},
			{
				nome: 'G.Skill Ripjaws V 32GB (2x16GB) DDR4 3600MHz',
				description:
					'Kit de memória RAM G.Skill Ripjaws V, 32GB (2x16GB), DDR4, 3600MHz.',
				specifications: '32GB, DDR4, 3600MHz',
				preco: 799.99,
				estrelas: 5,
				foto: 'https://example.com/gskill-ripjaws.jpg',
				categoriaId: memory.id,
			},
			{
				nome: 'Corsair Dominator Platinum 32GB (2x16GB) DDR4 3600MHz',
				description:
					'Kit de memória RAM Corsair Dominator Platinum, 32GB (2x16GB), DDR4, 3600MHz.',
				specifications: '32GB, DDR4, 3600MHz',
				preco: 1299.99,
				estrelas: 5,
				foto: 'https://example.com/corsair-dominator.jpg',
				categoriaId: memory.id,
			},
			{
				nome: 'G.Skill Trident Z Royal 16GB (2x8GB) DDR4 3200MHz',
				description:
					'Kit de memória RAM G.Skill Trident Z Royal, 16GB (2x8GB), DDR4, 3200MHz.',
				specifications: '16GB, DDR4, 3200MHz',
				preco: 599.99,
				estrelas: 5,
				foto: 'https://example.com/gskill-trident.jpg',
				categoriaId: memory.id,
			},
			{
				nome: 'Dell XPS 13 9310 Intel Core i7 16GB RAM 512GB SSD',
				description:
					'Notebook Dell XPS 13 com Intel Core i7, 16GB de RAM e 512GB SSD.',
				specifications: 'Intel Core i7, 16GB RAM, 512GB SSD',
				preco: 9999.99,
				estrelas: 5,
				foto: 'https://hakzttyrnyjeldmcjxpw.supabase.co/storage/v1/object/public/devstore//dellxps.png',
				categoriaId: laptops.id,
			},
			{
				nome: 'MacBook Pro 16 M1 Pro 16GB RAM 1TB SSD',
				description:
					'Notebook MacBook Pro 16 com chip M1 Pro, 16GB de RAM e 1TB SSD.',
				specifications: 'Chip M1 Pro, 16GB RAM, 1TB SSD',
				preco: 18999.99,
				estrelas: 5,
				foto: 'https://hakzttyrnyjeldmcjxpw.supabase.co/storage/v1/object/public/devstore//macbookpro16.png',
				categoriaId: laptops.id,
			},
			{
				nome: 'ThinkPad X1 Carbon 9ª geração Intel Core i7 16GB RAM 512GB SSD',
				description:
					'Notebook ThinkPad X1 Carbon com Intel Core i7, 16GB de RAM e 512GB SSD.',
				specifications: 'Intel Core i7, 16GB RAM, 512GB SSD',
				preco: 13999.99,
				estrelas: 5,
				foto: 'https://hakzttyrnyjeldmcjxpw.supabase.co/storage/v1/object/public/devstore//thinkpadx1.png',
				categoriaId: laptops.id,
			},
			{
				nome: 'HP Spectre x360 14 Intel Core i7 16GB RAM 512GB SSD',
				description:
					'Notebook HP Spectre x360 com Intel Core i7, 16GB de RAM e 512GB SSD.',
				specifications: 'Intel Core i7, 16GB RAM, 512GB SSD',
				preco: 8499.99,
				estrelas: 4,
				foto: 'https://hakzttyrnyjeldmcjxpw.supabase.co/storage/v1/object/public/devstore//hpspectrex36014.png',
				categoriaId: laptops.id,
			},
		],
	})
}

main()
	.catch((e) => {
		console.error(e)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
