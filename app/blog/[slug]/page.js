export default function BlogPostPage({ params }) {
	return (
		<main>
			<h2>Post</h2>
			<p>{params.slug}</p>
		</main>
	)
}
