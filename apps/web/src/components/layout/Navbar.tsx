'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '../LanguageSwitcher';
import { Button } from '../ui/Button';
import { Leaf } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold text-foreground tracking-tight">EcoBox</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-medium text-foreground/80">
          <Link href="/product" className="hover:text-primary transition-colors">La Caja</Link>
          <Link href="/about" className="hover:text-primary transition-colors">Nosotros</Link>
          <Link href="/dashboard" className="hover:text-primary transition-colors">Mi Cuenta</Link>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/product/pricing">
            <Button variant={isScrolled ? 'primary' : 'secondary'} size="sm" className="hidden sm:inline-flex">Suscribirme</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}