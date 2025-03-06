import { useState } from 'react'

export function useCounter(initialValue = 0, min = 0, max = 2) {
	const [count, setCount] = useState<number>(initialValue)

	const handleCount = (step: number): void => {
		setCount((prev) => {
			const newCount = prev + step
			return newCount >= min && newCount <= max ? newCount : prev
		})
	}

	return { count, handleCount }
}
