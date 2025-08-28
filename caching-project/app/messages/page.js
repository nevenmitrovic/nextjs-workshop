import { unstable_noStore } from 'next/cache'

import Messages from '@/components/messages'

// export const revalidate = 5 // number of seconds
// export const dynamic = 'force-dynamic' // always rerender and no-cache

export default async function MessagesPage() {
	// unstable_noStore()
	const response = await fetch('http://localhost:8080/messages', {
		next: { tags: ['msg'] },
	})
	const messages = await response.json()

	if (!messages || messages.length === 0) {
		return <p>No messages found</p>
	}

	return <Messages messages={messages} />
}
