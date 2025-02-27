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

	const featuredProducts = await prisma.categoria.create({
		data: {
			nome: 'Produtos em Destaque',
		},
	})

	await prisma.produto.createMany({
		data: [
			{
				nome: 'Intel Core i9-13900K',
				description:
					'Processador Intel Core i9 de 13ª geração, 24 núcleos, 32 threads, até 5.8GHz.',
				preco: 6499.99,
				estrelas: 4,
				foto: 'https://example.com/intel-i9-13900k.jpg',
				categoriaId: processors.id,
			},
			{
				nome: 'AMD Ryzen 9 7900X',
				description:
					'Processador AMD Ryzen 9 7900X com 12 núcleos e 24 threads, até 5.6GHz.',
				preco: 5599.99,
				estrelas: 5,
				foto: 'https://example.com/amd-ryzen-9-7900x.jpg',
				categoriaId: processors.id,
			},
			{
				nome: 'Intel Core i7-12700K',
				description:
					'Processador Intel Core i7 de 12ª geração, 12 núcleos, 20 threads, até 5.0GHz.',
				preco: 4799.99,
				estrelas: 5,
				foto: 'https://example.com/intel-i7-12700k.jpg',
				categoriaId: processors.id,
			},
			{
				nome: 'AMD Ryzen 7 5800X',
				description:
					'Processador AMD Ryzen 7 5800X com 8 núcleos e 16 threads, até 4.7GHz.',
				preco: 4099.99,
				estrelas: 4,
				foto: 'https://example.com/amd-ryzen-7-5800x.jpg',
				categoriaId: processors.id,
			},
			{
				nome: 'NVIDIA GeForce RTX 3080',
				description:
					'Placa de vídeo NVIDIA GeForce RTX 3080 com 10GB de VRAM GDDR6X.',
				preco: 8999.99,
				estrelas: 4,
				foto: 'https://example.com/rtx-3080.jpg',
				categoriaId: graphicsCards.id,
			},
			{
				nome: 'AMD Radeon RX 6900 XT',
				description:
					'Placa de vídeo AMD Radeon RX 6900 XT com 16GB de VRAM GDDR6.',
				preco: 8499.99,
				estrelas: 5,
				foto: 'https://example.com/amd-rx-6900-xt.jpg',
				categoriaId: graphicsCards.id,
			},
			{
				nome: 'NVIDIA GeForce RTX 3070 Ti',
				description:
					'Placa de vídeo NVIDIA GeForce RTX 3070 Ti com 8GB de VRAM GDDR6X.',
				preco: 6699.99,
				estrelas: 5,
				foto: 'https://example.com/rtx-3070-ti.jpg',
				categoriaId: graphicsCards.id,
			},
			{
				nome: 'AMD Radeon RX 6800 XT',
				description:
					'Placa de vídeo AMD Radeon RX 6800 XT com 16GB de VRAM GDDR6.',
				preco: 7599.99,
				estrelas: 5,
				foto: 'https://example.com/amd-rx-6800-xt.jpg',
				categoriaId: graphicsCards.id,
			},
			{
				nome: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz',
				description:
					'Kit de memória RAM Corsair Vengeance LPX, 16GB, DDR4, 3200MHz.',
				preco: 429.99,
				estrelas: 4,
				foto: 'https://example.com/corsair-vengeance.jpg',
				categoriaId: memory.id,
			},
			{
				nome: 'G.Skill Ripjaws V 32GB (2x16GB) DDR4 3600MHz',
				description:
					'Kit de memória RAM G.Skill Ripjaws V, 32GB, DDR4, 3600MHz.',
				preco: 799.99,
				estrelas: 5,
				foto: 'https://example.com/gskill-ripjaws.jpg',
				categoriaId: memory.id,
			},
			{
				nome: 'Corsair Dominator Platinum 32GB (2x16GB) DDR4 3600MHz',
				description:
					'Kit de memória RAM Corsair Dominator Platinum, 32GB, DDR4, 3600MHz.',
				preco: 1299.99,
				estrelas: 5,
				foto: 'https://example.com/corsair-dominator.jpg',
				categoriaId: memory.id,
			},
			{
				nome: 'G.Skill Trident Z Royal 16GB (2x8GB) DDR4 4000MHz',
				description:
					'Kit de memória RAM G.Skill Trident Z Royal, 16GB, DDR4, 4000MHz.',
				preco: 999.99,
				estrelas: 4,
				foto: 'https://example.com/gskill-trident.jpg',
				categoriaId: memory.id,
			},
			{
				nome: 'Dell XPS 15',
				description:
					'Notebook Dell XPS 15 com Intel Core i7, 16GB RAM e 512GB SSD.',
				preco: 11999.99,
				estrelas: 4,
				foto: 'https://example.com/dell-xps-15.jpg',
				categoriaId: laptops.id,
			},
			{
				nome: 'Apple MacBook Pro 16',
				description: 'MacBook Pro 16 com Apple M1 Pro, 32GB RAM, 1TB SSD.',
				preco: 24999.99,
				estrelas: 5,
				foto: 'https://example.com/macbook-pro-16.jpg',
				categoriaId: laptops.id,
			},
			{
				nome: 'Lenovo ThinkPad X1 Carbon Gen 9',
				description:
					'Notebook Lenovo ThinkPad X1 Carbon Gen 9 com Intel Core i7, 16GB RAM e 512GB SSD.',
				preco: 17999.99,
				estrelas: 5,
				foto: 'https://example.com/thinkpad-x1.jpg',
				categoriaId: laptops.id,
			},
			{
				nome: 'HP Spectre x360 14',
				description:
					'Notebook HP Spectre x360 com Intel Core i7, 16GB RAM e 1TB SSD.',
				preco: 15999.99,
				estrelas: 4,
				foto: 'https://example.com/hp-spectre.jpg',
				categoriaId: laptops.id,
			},
		],
	})

	await prisma.produto.updateMany({
		where: {
			estrelas: 5,
		},
		data: {
			categoriaId: featuredProducts.id,
		},
	})

	console.log('Dados inseridos com sucesso!')
}

main()
	.catch((e) => {
		throw e
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
