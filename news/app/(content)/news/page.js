'use client'

import { useEffect, useState } from 'react'

import NewsList from '@/components/news-list'

export default function NewsPage() {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [news, setNews] = useState(null)

	useEffect(() => {
		async function fetchNews() {
			setIsLoading(true)

			const response = await fetch('http://localhost:8080/news')

			if (!response.ok) {
				setError('Failed to fetch data.')
				setIsLoading(false)
				return
			}

			const newsData = await response.json()
			setNews(newsData)
			setIsLoading(false)
		}

		fetchNews()
	}, [])

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>{error}</p>
	}

	let newsListContent

	if (news) {
		return <NewsList news={news} />
	}

	return (
		<>
			<h1>News Page</h1>
			{newsListContent}
		</>
	)
}
