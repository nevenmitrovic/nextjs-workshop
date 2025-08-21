import Link from 'next/link'

export default function NewsPage() {
	return (
		<div id='page'>
			<h1>News Page</h1>
			<ul>
				<li>
					<Link href='/news/new-1'>New 1</Link>
				</li>
				<li>
					<Link href='/news/new-2'>New 2</Link>
				</li>
				<li>
					<Link href='/news/new-3'>New 3</Link>
				</li>
			</ul>
		</div>
	)
}
