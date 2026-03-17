import { Link } from '@/i18n/routing';
import { Leaf, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-surface mt-auto">
      <div className="container mx-auto px-6 max-w-6xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-foreground tracking-tight">EcoBox</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Haciendo del mundo un lugar más verde, una caja a la vez. Productos ecológicos para tu hogar.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/product" className="hover:text-primary transition-colors">La Caja</Link></li>
              <li><Link href="/product/pricing" className="hover:text-primary transition-colors">Precios</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Regala una EcoBox</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Sostenibilidad</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Síguenos</h4>
            <div className="flex items-center gap-4 text-muted">
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-surface text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} EcoBox. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}