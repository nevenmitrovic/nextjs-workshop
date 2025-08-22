import Link from 'next/link'

import { getAvailableNewsYears } from '@/lib/news'
import { getNewsForYear } from '@/lib/news'
import NewsList from '@/components/news-list'

export default function FilteredNewsPage({ params }) {
	const newsYear = params.filter

	const links = getAvailableNewsYears()

	return (
		<header id='archive-header'>
			<nav>
				<ul>
					{links.map((link) => (
						<li key={link}>
							<Link href={`/archive/${link}`}>{link}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

// const news = getNewsForYear(newsYear)
// return <NewsList news={news} />
