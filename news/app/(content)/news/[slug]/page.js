import { notFound } from 'next/navigation'
import Link from 'next/link'

import { getNewsItem } from '@/lib/news'

export default async function NewsDetails({ params }) {
	const newsSlug = params.slug
	const newsItem = await getNewsItem(newsSlug)

	if (!newsItem) {
		notFound()
	}

	return (
		<article className='news-article'>
			<header>
				<h1>{newsItem.title}</h1>
				<Link href={`/news/${newsItem.slug}/image`}>
					<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				</Link>
				<p>{newsItem.title}</p>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<p>{newsItem.content}</p>
		</article>
	)
}
