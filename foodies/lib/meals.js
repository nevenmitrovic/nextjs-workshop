import sql from 'better-sqlite3'

const db = sql('meals.db')

export default async function getMeals() {
	new Promise((resolve) => setTimeout(resolve, 2000)) // for loading state
	return db.prepare('SELECT * FROM meals').all()
}
