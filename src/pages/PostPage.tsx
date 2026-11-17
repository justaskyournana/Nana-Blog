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
      <Helmet>
        <title>{post.title} | Nana's Table</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://justaskyournana.com/blog/${post.slug}`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Nana" />
        <meta property="article:section" content={post.category} />
        {post.image && <meta property="og:image" content={post.image} />}
        <meta name="description" content={post.excerpt} />
      </Helmet>

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
