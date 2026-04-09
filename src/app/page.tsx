import Link from 'next/link'
import { getPostList } from '@/lib/posts'

export default function Home() {
  const posts = getPostList().slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        {/* 装饰性渐变圆 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-60 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-50 to-transparent rounded-full opacity-80 translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-primary mb-4 tracking-tight">
            🐑 大师的学习空间
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            一条普通咸鱼的学习日记与日常感悟
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/blog"
              className="px-8 py-3 bg-primary text-white rounded-full hover:bg-blue-800 transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm font-medium"
            >
              浏览文章
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            📝 精选文章
          </h2>
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
                    <span className="inline-block mt-4 text-sm text-primary font-medium group-hover:underline">
                      阅读全文 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="text-primary hover:underline text-sm font-semibold tracking-wide"
            >
              查看全部文章 →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            👋 关于我
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <p className="text-gray-700 leading-relaxed">
              你好！我是一条普通的咸鱼，喜欢学习和探索新知识。
              这个博客记录了我的学习笔记、技术思考和生活感悟。
              希望能在这里与你分享我的成长过程，也期待从你的反馈中获得启发。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
