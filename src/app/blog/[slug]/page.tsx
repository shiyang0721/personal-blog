import Link from 'next/link'
import { getPostBySlug, markdownToHtml } from '@/lib/posts'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  const posts = getPostList()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// 引入 getPostList 用于 generateStaticParams
import { getPostList } from '@/lib/posts'

export default async function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-400 mb-4">文章未找到</h1>
        <Link href="/blog" className="text-primary hover:underline">
          返回文章列表
        </Link>
      </div>
    )
  }

  // 将 Markdown 转换为 HTML
  const contentHtml = await markdownToHtml(post.content)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="text-sm text-gray-500 hover:text-primary mb-6 inline-block"
      >
        ← 返回文章列表
      </Link>
      <article className="bg-white rounded-xl shadow-sm p-8 border">
        <header className="mb-8">
          <span className="text-sm text-gray-500">{post.date}</span>
          <h1 className="text-3xl font-bold text-primary mt-2 mb-4">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-gray-600 text-lg">{post.description}</p>
          )}
        </header>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  )
}