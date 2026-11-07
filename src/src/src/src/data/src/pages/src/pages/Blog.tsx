import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Blog() {
  return (
    <div>
      <p className="text-sm tracking-widest text-amber-700 uppercase mb-2">Everything in one place</p>
      <h1 className="text-4xl font-bold text-amber-900 mb-4">The Blog</h1>
      <p className="text-stone-600 mb-10 max-w-2xl">
        Pull up a chair and have a look through. Use the categories to narrow it down, or start with whatever matches the trouble you're having today.
      </p>
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-sm p-6 border border-stone-200">
            <div className="text-xs text-amber-700 font-medium uppercase mb-1">{post.category}</div>
            <h2 className="text-2xl font-medium mb-2">
              <Link to={`/blog/${post.slug}`} className="hover:text-amber-700">{post.title}</Link>
            </h2>
            <p className="text-stone-700 mb-3">{post.excerpt}</p>
            <div className="text-xs text-stone-500">{post.date} · {post.readTime}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
