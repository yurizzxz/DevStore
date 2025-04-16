import { useEffect, useState } from 'react'

interface CartItem {
	nome: string
	price: number
	image: string
	quantity: number
}

export const useCart = () => {
	const [cart, setCart] = useState<CartItem[]>([])
	const [message, setMessage] = useState<string | null>(null)

	useEffect(() => {
		const storedCart = localStorage.getItem('cart')
		if (storedCart) {
			setCart(JSON.parse(storedCart))
		}
	}, [])

	const addToCart = (item: CartItem) => {
		const updatedCart = [...cart, item]
		setCart(updatedCart)
		localStorage.setItem('cart', JSON.stringify(updatedCart))

		setMessage('Item adicionado ao carrinho!')

		setTimeout(() => {
			setMessage(null)
		}, 3000)
	}
	

	return {
		cart,
		addToCart,
		message,
	}
}
