import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const categories = [
  { name: "Home & Organization", desc: "Keeping a real house running without losing your whole Saturday.", count: 2 },
  { name: "Simple Cooking", desc: "Suppers you can make tired, from things you already have.", count: 2 },
  { name: "Family & Grandkids", desc: "Rainy days, long car rides, and being good company to children.", count: 4 },
  { name: "Product Recommendations", desc: "Things I have used long enough to have an opinion about.", count: 2 },
  { name: "Everyday Tips", desc: "Small fixes, thrift that is not miserable, and making do well.", count: 3 },
];

export default function Home() {
  const featured = posts.slice(0, 3);
  const latest = posts.slice(3, 7);

  return (
    <div className="space-y-16">
      <section className="text-center py-8">
        <p className="text-sm tracking-widest text-amber-700 uppercase mb-2">Welcome to the Kitchen Table</p>
        <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Come on in — pull up a chair</h1>
        <p className="text-lg text-stone-700 max-w-2xl mx-auto leading-relaxed">
          This is where I write down the things that have actually worked: keeping a home without losing your Saturday, suppers you can cook tired, homeschooling at a real kitchen table, rainy days with the grandkids, and honest picks for the things worth buying once.
        </p>
        <p className="text-stone-600 mt-4 max-w-xl mx-auto">
          No hype, no lectures, and nothing recommended that I would not hand to my own daughter.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link to="/blog" className="bg-amber-700 text-white px-6 py-3 rounded-md hover:bg-amber-800">Start Reading</Link>
          <Link to="/about" className="border border-amber-700 text-amber-800 px-6 py-3 rounded-md hover:bg-amber-50">About Nana</Link>
        </div>
        <p className="mt-6 text-sm text-stone-500">12 posts across 5 subjects, and more coming.</p>
      </section>

      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-semibold text-amber-900">Featured Posts</h2>
          <Link to="/blog" className="text-amber-700 text-sm">See all posts →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm p-5 border border-stone-200">
              <div className="text-xs text-amber-700 font-medium mb-2 uppercase">{post.category}</div>
              <h3 className="text-xl font-medium mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:text-amber-700">{post.title}</Link>
              </h3>
              <p className="text-stone-600 text-sm mb-3">{post.excerpt}</p>
              <div className="text-xs text-stone-500">{post.date} · {post.readTime}</div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-amber-900 mb-6">Browse by Category</h2>
        <p className="text-stone-600 mb-6">Five subjects, and everything I write fits in one of them. Pick whichever one matches the trouble you are having today.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(cat => (
            <div key={cat.name} className="bg-white p-5 rounded-lg border border-stone-200">
              <h3 className="font-medium text-lg mb-1">{cat.name}</h3>
              <p className="text-stone-600 text-sm mb-2">{cat.desc}</p>
              <p className="text-xs text-stone-500">{cat.count} posts</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-amber-900 mb-6">Nana's Latest</h2>
        <div className="space-y-5">
          {latest.map(post => (
            <article key={post.id} className="border-b border-stone-200 pb-5">
              <div className="text-xs text-amber-700 uppercase mb-1">{post.category}</div>
              <h3 className="text-xl font-medium">
                <Link to={`/blog/${post.slug}`} className="hover:text-amber-700">{post.title}</Link>
              </h3>
              <p className="text-stone-600 text-sm mt-1">{post.excerpt}</p>
              <div className="text-xs text-stone-500 mt-2">{post.date} · {post.readTime}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-amber-900 mb-4">Why you can trust this blog</h2>
        <p className="text-stone-700 mb-6">There is a great deal of advice on the internet written by people who have never done the thing they are describing. Here is how I try to be different.</p>
        <div className="space-y-4 text-stone-700">
          <div><strong>Real experience, not research</strong> — Three children raised, and homeschooled at my kitchen table, six grandchildren growing and thriving and fifty years of learning to find joy in simple things. I write about what I have actually done.</div>
          <div><strong>Tested before it is recommended</strong> — I only write about things I have owned and used hard. If a thing has a flaw, I will tell you the flaw right there in the same paragraph.</div>
          <div><strong>Plain talk, no hype</strong> — No breathless headlines, no "you will not believe," no pressure. Just the way I would explain it to you sitting at my table.</div>
          <div><strong>Clear about the money</strong> — Some links here are affiliate links, and I say so at the top of every post that has them. It never costs you a penny extra.</div>
        </div>
      </section>
    </div>
  );
}
