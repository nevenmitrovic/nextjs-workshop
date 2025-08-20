import sql from 'better-sqlite3'

const db = sql('meals.db')

export default async function getMeals() {
	return db.prepare('SELECT * FROM meals').all()
}
