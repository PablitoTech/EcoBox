import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { Leaf, Box, TrendingUp, PackageCheck, Truck, Smile } from 'lucide-react';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('HomePage');
  
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-[#F5F1E8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,50,0.05),transparent_50%)]" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-white mb-8 text-primary font-semibold text-xs uppercase tracking-widest reveal">
                <Leaf className="w-3.5 h-3.5" /> <span>Eco-friendly Choice</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tight mb-8 leading-[0.9] reveal reveal-delay-1">
                {t('hero.title').split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? "text-primary block" : "block"}>{word} </span>
                ))}
              </h1>
              <p className="text-xl text-muted max-w-xl mb-12 leading-relaxed font-medium reveal reveal-delay-2">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-5 reveal reveal-delay-3">
                <Link href="/product">
                  <Button size="lg" className="w-full sm:w-auto px-10 py-7 text-lg rounded-2xl shadow-premium hover:shadow-premium-hover transition-all">
                    {t('hero.cta')}
                  </Button>
                </Link>
                <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/40 border border-white/60">
                   <div className="flex -space-x-2">
                     {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-surface shadow-sm overflow-hidden"><img src={`/team-${i}.png`} className="w-full h-full object-cover" /></div>)}
                   </div>
                   <span className="text-sm font-bold text-foreground/70">+2.5k Eco-fans</span>
                </div>
              </div>
            </div>
            <div className="flex-1 relative reveal">
              <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square group">
                <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0" />
                <img 
                  src="/hero-premium.png" 
                  alt="EcoBox Premium" 
                  className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-surface max-w-[200px] hidden md:block animate-bounce-slow">
                  <p className="text-xs font-black text-primary uppercase tracking-tighter mb-2">Edición Limitada</p>
                  <p className="text-sm font-bold text-foreground">Productos locales seleccionados cada mes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Mockup Section */}
      <section className="container mx-auto px-6 max-w-6xl -mt-8 mb-24">
        <div className="w-full aspect-[21/9] bg-surface rounded-3xl shadow-lg border border-white/40 overflow-hidden relative flex items-center justify-center">
          {/* Placeholder for an actual EcoBox image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/10" />
          <Box className="w-32 h-32 text-primary/40 relative z-10" />
          <span className="absolute bottom-6 right-8 text-sm text-primary/60 font-medium">EcoBox Packaging</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -mr-20 -mt-20" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl mb-20 reveal">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              Diseñado para un <span className="text-primary italic">estilo de vida consciente</span>.
            </h2>
            <p className="text-lg text-muted font-medium">
              Nos encargamos de lo difícil: encontrar productos éticos y efectivos para que tú solo disfrutes del cambio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-[#F9F7F2] p-10 rounded-[2.5rem] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-premium transition-all duration-500 reveal reveal-delay-1">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('features.f1_title')}</h3>
              <p className="text-muted leading-relaxed font-medium">{t('features.f1_desc')}</p>
            </div>
            
            <div className="group bg-[#F9F7F2] p-10 rounded-[2.5rem] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-premium transition-all duration-500 reveal reveal-delay-2">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Box className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('features.f2_title')}</h3>
              <p className="text-muted leading-relaxed font-medium">{t('features.f2_desc')}</p>
            </div>
            
            <div className="group bg-[#F9F7F2] p-10 rounded-[2.5rem] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-premium transition-all duration-500 reveal reveal-delay-3">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('features.f3_title')}</h3>
              <p className="text-muted leading-relaxed font-medium">{t('features.f3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-32 bg-[#F5F1E8]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 uppercase tracking-tight">{t('howItWorks.title')}</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/10 -translate-y-1/2 -z-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              <div className="flex flex-col items-center text-center reveal reveal-delay-1 group">
                <div className="w-24 h-24 bg-white text-primary rounded-[2rem] flex items-center justify-center mb-8 shadow-xl border-4 border-white group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <PackageCheck className="w-10 h-10" />
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-black border-4 border-[#F5F1E8]">1</div>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">{t('howItWorks.s1_title')}</h3>
                <p className="text-muted font-medium max-w-[250px]">{t('howItWorks.s1_desc')}</p>
              </div>
              
              <div className="flex flex-col items-center text-center reveal reveal-delay-2 group">
                <div className="w-24 h-24 bg-white text-primary rounded-[2rem] flex items-center justify-center mb-8 shadow-xl border-4 border-white group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:-rotate-6">
                  <Truck className="w-10 h-10" />
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-black border-4 border-[#F5F1E8]">2</div>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">{t('howItWorks.s2_title')}</h3>
                <p className="text-muted font-medium max-w-[250px]">{t('howItWorks.s2_desc')}</p>
              </div>
              
              <div className="flex flex-col items-center text-center reveal reveal-delay-3 group">
                <div className="w-24 h-24 bg-white text-primary rounded-[2rem] flex items-center justify-center mb-8 shadow-xl border-4 border-white group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <Smile className="w-10 h-10" />
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-black border-4 border-[#F5F1E8]">3</div>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">{t('howItWorks.s3_title')}</h3>
                <p className="text-muted font-medium max-w-[250px]">{t('howItWorks.s3_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white px-6">
        <div className="container mx-auto max-w-6xl text-center bg-primary rounded-[4rem] p-16 md:p-24 shadow-2xl overflow-hidden relative reveal">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 text-white/5 rotate-12">
            <Leaf className="w-96 h-96" />
          </div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 text-white/5 -rotate-12">
            <Leaf className="w-96 h-96" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
              {t('cta.title')}
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 font-medium leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <Link href="/product" className="inline-block group">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 px-12 py-8 text-xl font-black rounded-2xl shadow-premium hover:scale-105 transition-all duration-300">
                {t('cta.button')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}