import { notFound } from 'next/navigation'
import Link from 'next/link'

import { DUMMY_NEWS } from '@/dummy-news'

export default function NewsDetails({ params }) {
	const newsSlug = params.slug
	const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug)

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
