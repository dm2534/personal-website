import Link from 'next/link';
import { Search } from 'lucide-react';

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.38 6.52-1.6 6.52-7.05 0-1.5-.5-2.75-1.3-3.7.13-.32.6-1.75-.13-3.65 0 0-1-.3-3.3 1.2a11.3 11.3 0 0 0-6 0c-2.3-1.5-3.3-1.2-3.3-1.2-.73 1.9-.26 3.33-.13 3.65-.8.95-1.3 2.2-1.3 3.7 0 5.45 3.34 6.67 6.52 7.05-.5.45-.9 1.15-1 2.25-.9.4-3.1.8-4.5-1.5 0 0-.8-1.5-2.3-1.5 0 0-1.5 0-.1 1 0 0 1.2.7 2.2 2.5 0 0 1.2 3.5 5.5 3.5v4"/>
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

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
          <LinkedinIcon size={20} />
        </a>
        <a href="https://github.com" target="https://github.com/dm2534" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
          <GithubIcon size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
          <InstagramIcon size={20} />
        </a>
        <button className="hover:text-purple-400 transition-colors">
          <Search size={20} />
        </button>
      </div>
    </header>
  );
}
