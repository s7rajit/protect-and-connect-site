
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

type NavItem = {
  name: string;
  href: string;
};

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Resources', href: '/resources' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-20">
          <span className="text-prevented-blue font-bold text-2xl">PreventED</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-foreground hover:text-prevented-blue font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-prevented-accent hover:bg-prevented-accent/90 text-white font-medium">
            <a href="/donate">Donate</a>
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden z-20 p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-10 md:hidden py-20 px-6">
            <nav className="flex flex-col items-center gap-6 pt-10" role="navigation" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-prevented-blue font-medium text-lg py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full bg-prevented-accent hover:bg-prevented-accent/90 text-white font-medium mt-4">
                <a href="/donate">Donate</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
