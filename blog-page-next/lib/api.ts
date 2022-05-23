import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface postInf {
  title: string
  excerpt?: string
  date?: string
  author?: { name: string; picture?: string }
  slug?: string
  content?: string
}

const postsDirectory = join(process.cwd(), '_blogs')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: any, fields = ['']) {
  // console.log(slug, fields)

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: { [propName: string]: any } = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field: string) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = ['']) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
