import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PostPage from './pages/PostPage';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import About from './pages/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <header className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-center sm:text-left">
            <div className="text-3xl font-bold text-amber-900">Nana's Table</div>
            <div className="text-xs tracking-widest text-amber-700 uppercase">Warm, Practical Advice That Works</div>
          </Link>
          <nav className="flex flex-wrap gap-5 text-sm">
            <NavLink to="/" className={({ isActive }) => isActive ? 'font-semibold text-amber-800' : 'text-stone-700 hover:text-amber-700'}>Home</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'font-semibold text-amber-800' : 'text-stone-700 hover:text-amber-700'}>Blog</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'font-semibold text-amber-800' : 'text-stone-700 hover:text-amber-700'}>About</NavLink>
            <NavLink to="/newsletter" className={({ isActive }) => isActive ? 'font-semibold text-amber-800' : 'text-stone-700 hover:text-amber-700'}>Weekly Note</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-semibold text-amber-800' : 'text-stone-700 hover:text-amber-700'}>Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-stone-800 text-stone-300 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm space-y-3">
          <p>Nana's Table — Warm, practical advice for keeping a home, feeding a family and enjoying the grandchildren — written the way I'd tell you over a cup of coffee.</p>
          <p>
            <a href="https://www.instagram.com/justaskyournana/" target="_blank" rel="noreferrer" className="underline hover:text-white">Follow Nana on Instagram</a>
          </p>
          <p className="text-xs">As an Amazon Associate I earn from qualifying purchases.</p>
          <p className="text-xs">© {new Date().getFullYear()} Nana's Table. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
