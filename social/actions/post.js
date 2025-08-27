import { redirect } from 'next/navigation'

import { storePost } from '@/lib/posts'
import { uploadImage } from '@/lib/cloudinary'

export async function createPost(prevState, formData) {
	'use server'
	const title = formData.get('title')
	const image = formData.get('image')
	const content = formData.get('content')

	const errors = []

	if (!title || title.trim().length === 0) {
		errors.push('Title is required.')
	}

	if (!image || image.size === 0) {
		errors.push('Image is required.')
	}

	if (!content || content.trim().length === 0) {
		errors.push('Content is required.')
	}

	if (errors.length > 0) {
		return { errors }
	}

	let imageUrl
	try {
		imageUrl = await uploadImage(image)
	} catch (erro) {
		throw new Error('Failed to upload a image to cloudinary.')
	}

	await storePost({
		imageUrl: imageUrl,
		title,
		content,
		userId: 1,
	})

	redirect('/feed')
}
