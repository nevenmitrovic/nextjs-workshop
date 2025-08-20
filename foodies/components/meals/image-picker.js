'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'

import classes from './image-picker.module.css'

export default function ImagePicker({ label, name }) {
	const [image, setImage] = useState(null)
	const imageInput = useRef()

	function handlePickImage() {
		imageInput.current.click()
	}
	function handleImageChange(event) {
		const file = event.target.files[0]

		if (!file) {
			setImage(null)
		}

		const fileReader = new FileReader()
		fileReader.onload = () => {
			setImage(fileReader.result)
		}
		fileReader.readAsDataURL(file)
	}

	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!image && <p>No image selected yet.</p>}
					{image && <Image src={image} alt='The Image selected by the User.' fill />}
				</div>
				<input
					className={classes.input}
					type='file'
					name={name}
					id={name}
					accept='img/png, img/jpeg'
					ref={imageInput}
					onChange={handleImageChange}
					required
				/>
				<button className={classes.button} onClick={handlePickImage} type='button'>
					Pick an Image
				</button>
			</div>
		</div>
	)
}
