import Link from 'next/link';
import { Code, Linkedin, Instagram, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-purple-500/20">
      <nav className="flex space-x-6">
        <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-purple-400 transition-colors">About</Link>
        <Link href="/projects" className="hover:text-purple-400 transition-colors">Projects</Link>
        <Link href="/blog" className="hover:text-purple-400 transition-colors">Blog</Link>
        <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
      </nav>
      <div className="flex space-x-4">
        <a href="https://linkedin.com" target="https://www.linkedin.com/in/dale-monteiro-90a3b4213/" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com" target="https://github.com/dm2534" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
          <Code size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
          <Instagram size={20} />
        </a>
        <button className="hover:text-purple-400 transition-colors">
          <Search size={20} />
        </button>
      </div>
    </header>
  );
}