import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { Helmet } from 'react-helmet-async';

export default function PostPage() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found. <Link to="/blog">Back to blog</Link></div>;
  }

  return (
    <>
   

      <article className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-amber-700 text-sm mb-4 inline-block">← Back to blog</Link>
        <div className="text-sm text-stone-500 mb-2">{post.category} · {post.readTime}</div>
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        {post.slug === "the-microscope-we-all-fought-over" && (
          <video controls className="w-full rounded-lg mb-8">
            <source src="/microscope.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className="prose prose-stone max-w-none">
          <p className="text-lg leading-relaxed whitespace-pre-line">{post.content}</p>
        </div>
      </article>
    </>
  );
}
