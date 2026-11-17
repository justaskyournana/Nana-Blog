import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function PostPage() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found. <Link to="/blog">Back to blog</Link></div>;
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link to="/blog" className="text-amber-700 text-sm mb-4 inline-block">← Back to blog</Link>
      <div className="text-sm text-stone-500 mb-2">{post.category} · {post.readTime}</div>
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {post.image && (
        <a href="https://www.amazon.com/shop/influencer-b1911c59/list/2SDO59V5Z0K75?tag=justaskyournana-20" target="_blank" rel="noopener noreferrer">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full rounded-lg mb-6 hover:opacity-90 transition" 
          />
        </a>
      )}

      {post.slug === "the-microscope-we-all-fought-over" && (
        <div className="mb-8">
          <video controls className="w-full rounded-lg mb-4">
            <source src="/microscope.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="https://www.amazon.com/dp/B06QOnEeG?tag=justaskyournana-20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition"
            >
              Shop the Microscope
            </a>
            <a 
              href="https://www.pinterest.com/pin/create/button/?url=https://justaskyournana.com/blog/the-microscope-we-all-fought-over&media=https://justaskyournana.com/microscope.MP4&description=The%20Microscope%20We%20All%20Fought%20Over"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition"
            >
              Pin this Video
            </a>
          </div>
        </div>
      )}

      <div className="prose prose-stone max-w-none">
        <p className="text-lg leading-relaxed whitespace-pre-line">{post.content}</p>
      </div>
    </article>
  );
}
