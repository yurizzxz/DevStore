import { useEffect, useState } from 'react'

interface CartItem {
	nome: string
	price: number
	image: string
	quantity: number
}

export const useCart = () => {
	const [cart, setCart] = useState<CartItem[]>([])

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
		alert('Item adicionado ao carrinho!')
	}

	return {
		cart,
		addToCart,
	}
}
