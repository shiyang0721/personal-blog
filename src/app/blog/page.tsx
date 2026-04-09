import Link from 'next/link'
import { getPostList } from '@/lib/posts'

export default function BlogPage() {
  const posts = getPostList()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">📚 所有文章</h1>
      <p className="text-gray-500 text-sm mb-10">共 {posts.length} 篇文章</p>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="post-card block bg-white rounded-xl shadow-sm p-0 border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row items-start gap-0">
              {/* 封面图 */}
              {post.coverImage && (
                <div className="w-full sm:w-48 h-48 sm:h-auto rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none overflow-hidden flex-shrink-0">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              {/* 内容 */}
              <div className="flex-1 p-6">
                <span className="text-sm text-blue-400 font-medium">
                  {post.date}
                </span>
                <h3 className="text-xl font-bold text-primary mt-1 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {post.description}
                </p>
                <span className="inline-block mt-4 text-sm text-primary font-medium">
                  阅读全文 →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>暂无文章，敬请期待！</p>
        </div>
      )}
    </div>
  )
}
