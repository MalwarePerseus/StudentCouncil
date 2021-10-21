import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

export function getAllPosts(){
	const postsDirectory = path.join(process.cwd(), '_posts')
	const filenames = fs.readdirSync(postsDirectory)

	return filenames.map(filename => {
		const file = fs.readFileSync(path.join(process.cwd(), '_posts', filename), 'utf8')

		//get frontmatter
		const { data } = matter(file)

		//get slunglink from filename
		const slug = filename.replace(/\.md$/, '')

		//return combined frontmatter and slug; build permalink
		return {
			...data,
			slug,
			permalink: `/posts/${slug}`
		}

	}) 
}

export function getPostBySlug(slug) {
	const file = fs.readFileSync(path.join(process.cwd(), '_posts', `${slug}.md`), 'utf8')

	const{
		content,
		data,
	} = matter(file)

	const body = remark().use(html).processSync(content).toString()

	return {
		...data,
		body,
	}
}

export function getAllHeads() {
	const membersDirectory = path.join(process.cwd(), '_heads')
	const filenames = fs.readdirSync(membersDirectory)

	return filenames.map(filename => {
		const file = fs.readFileSync(path.join(process.cwd(), '_heads', filename), 'utf8')

		//get data
		const data = JSON.parse(file)

		//get slug from filename
		const slug = filename.replace(/\.json/, '')

		//return combined frontmatter and slug; build permalink
		return {
			...data,
			slug,
			permalink: `/members/${slug}`,
			profilePictureURL: `/${slug}.jpg`,
		}
	})
}

export function getAllExecHeads() {
	const membersDirectory = path.join(process.cwd(), '_execHeads')
	const filenames = fs.readdirSync(membersDirectory)

	return filenames.map(filename => {
		const file = fs.readFileSync(path.join(process.cwd(), '_execHeads', filename), 'utf8')

		//get data
		const data = JSON.parse(file)

		//get slug from filename
		const slug = filename.replace(/\.json/, '')

		//return combined frontmatter and slug; build permalink
		return {
			...data,
			slug,
			permalink: `/members/${slug}`,
			profilePictureURL: `/${slug}.jpg`,
		}
	})
}

export function getAllExecMems() {
	const membersDirectory = path.join(process.cwd(), '_execMems')
	const filenames = fs.readdirSync(membersDirectory)

	return filenames.map(filename => {
		const file = fs.readFileSync(path.join(process.cwd(), '_execMems', filename), 'utf8')

		//get data
		const data = JSON.parse(file)

		//get slug from filename
		const slug = filename.replace(/\.json/, '')

		//return combined frontmatter and slug; build permalink
		return {
			...data,
			slug,
			permalink: `/members/${slug}`,
			profilePictureURL: `/${slug}.jpg`,
		}
	})
}

export function getAllSportCaps() {
	const membersDirectory = path.join(process.cwd(), '_sportCaps')
	const filenames = fs.readdirSync(membersDirectory)

	return filenames.map(filename => {
		const file = fs.readFileSync(path.join(process.cwd(), '_sportCaps', filename), 'utf8')

		//get data
		const data = JSON.parse(file)

		//get slug from filename
		const slug = filename.replace(/\.json/, '')

		//return combined frontmatter and slug; build permalink
		return {
			...data,
			slug,
			permalink: `/members/${slug}`,
			profilePictureURL: `/${slug}.jpg`,
		}
	})
}

export function getMembersBySlug(slug) {
	const file = fs.readFileSync(path.join(process.cwd(), '_members', `${slug}.json`), 'utf8')

	const data = JSON.parse(file)

	return{
		...data,
		permalink: `/members/${slug}`,
		profilePictureURL: `/${slug}.jpg`,
		slug,
	}
}