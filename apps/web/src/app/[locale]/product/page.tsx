import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Box, Leaf } from 'lucide-react';

export default async function ProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ProductPage');
  
  return (
    <main className="flex flex-col min-h-screen pt-12 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-7xl text-center mb-24 reveal">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-white mb-8 text-primary font-bold text-xs uppercase tracking-widest">
          <Leaf className="w-4 h-4" /> <span>Nuestra caja estrella</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-none">{t('title')}</h1>
        <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto font-medium leading-relaxed">{t('subtitle')}</p>
      </section>

      {/* Main Showcase */}
      <section className="container mx-auto px-6 max-w-7xl mb-32 reveal reveal-delay-1">
        <div className="bg-white rounded-[4rem] p-4 shadow-premium border border-white relative overflow-hidden group">
          <div className="aspect-[21/9] w-full relative overflow-hidden rounded-[3.5rem]">
            <img 
              src="/ecobox-lifestyle.png" 
              alt="EcoBox Lifestyle" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 text-white">
               <p className="text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-80">Experiencia Curada</p>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">Vive la sostenibilidad <br/>en cada entrega.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery & Details */}
      <section className="container mx-auto px-6 max-w-7xl mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16 reveal">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 leading-none tracking-tight">
                {t('galleryTitle')}
              </h2>
              <p className="text-xl text-muted font-medium leading-relaxed">
                {t('gallerySubtitle')}
              </p>
            </div>
            <ul className="space-y-8">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <span className="text-xl font-bold text-foreground/80">{t(`item${i}` as any)}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-6 reveal reveal-delay-2">
             <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white group relative">
                <img src="/ecobox-detail-1.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6 text-center">
                  <span className="text-white font-black text-sm uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{t('gallery_img1')}</span>
                </div>
             </div>
             <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white mt-12 group relative">
                <img src="/ecobox-detail-2.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6 text-center">
                  <span className="text-white font-black text-sm uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{t('gallery_img2')}</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Selection Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tighter">{t('selectionTitle')}</h2>
            <p className="text-xl text-muted max-w-2xl mx-auto font-medium">{t('selectionSubtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group reveal" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="aspect-square rounded-[3rem] overflow-hidden bg-[#E5E2D9] mb-8 relative border-4 border-white shadow-xl">
                  <img 
                    src={i === 1 ? '/prod-soap.png' : i === 2 ? '/prod-bamboo.png' : '/prod-bags.png'} 
                    alt={t(`prod${i}_name` as any)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Leaf className="text-white w-12 h-12" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3">{t(`prod${i}_name` as any)}</h3>
                <p className="text-muted font-medium leading-relaxed">{t(`prod${i}_desc` as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA to Pricing */}
      <section className="container mx-auto px-6 max-w-5xl text-center mb-24 reveal">
        <div className="bg-white rounded-[4rem] p-16 md:p-24 shadow-premium border-4 border-primary relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/5 pointer-events-none" />
          <h2 className="text-4xl md:text-7xl font-black text-primary mb-10 leading-none tracking-tighter relative z-10">
            ¿Listo para empezar <br/>tu viaje Eco?
          </h2>
          <Link href="/product/pricing" className="relative z-10 inline-block">
            <Button variant="outline" size="lg" className="bg-white px-12 py-8 text-xl font-black rounded-2xl shadow-premium hover:bg-primary hover:text-white transition-all duration-300">
              {t('subscribe_btn')}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}