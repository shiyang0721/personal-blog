import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  coverImage?: string
  content: string
}

export function getPostList(): PostMeta[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPosts = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug,
          title: data.title || '无标题',
          date: data.date || '',
          description: data.description || '',
          coverImage: data.coverImage || '',
          content: '',
        }
      })

    return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): PostMeta | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      return null
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '无标题',
      date: data.date || '',
      description: data.description || '',
      coverImage: data.coverImage || '',
      content,
    }
  } catch (error) {
    console.error('Error reading post:', error)
    return null
  }
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)  // 支持表格、删除线等 GFM 语法
    .use(html)
    .process(markdown)
  return result.toString()
}