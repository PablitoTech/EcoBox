import { getTranslations, setRequestLocale } from 'next-intl/server';
import { CheckCircle2, Box, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ProductPage');
  
  return (
    <main className="flex flex-col min-h-screen pt-12 pb-24 bg-[#F5F1E8]">
      <section className="container mx-auto px-6 max-w-7xl text-center mb-16 reveal">
        <h1 className="text-4xl md:text-7xl font-black text-foreground mb-4 uppercase tracking-tighter">{t('selectPlanTitle')}</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto font-medium">{t('selectPlanSubtitle')}</p>
      </section>

      <section className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Plans Section */}
          <div className="lg:col-span-3 space-y-12">
            <h2 className="text-2xl font-black text-foreground uppercase tracking-widest border-l-4 border-primary pl-4">{t('simplePlans')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Plan 1 */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-surface shadow-sm hover:shadow-premium transition-all reveal reveal-delay-1 flex flex-col">
                <h3 className="text-xl font-black text-foreground mb-2 uppercase tracking-tighter">{t('plan1_name')}</h3>
                <div className="text-4xl font-black text-primary mb-4">{t('plan1_price')}</div>
                <p className="text-muted text-sm mb-8 flex-grow font-medium leading-relaxed">{t('plan1_desc')}</p>
                <Button variant="outline" className="w-full py-5 font-bold rounded-xl border-2">
                  Seleccionar
                </Button>
              </div>
              
              {/* Plan 2 - Featured */}
              <div className="bg-white rounded-[2.5rem] p-8 border-4 border-primary shadow-premium hover:shadow-premium-hover transition-all reveal reveal-delay-2 flex flex-col relative scale-[1.02]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black px-4 py-1 rounded-full shadow-lg border-2 border-white tracking-widest uppercase">
                  Popular
                </div>
                <h3 className="text-xl font-black text-foreground mb-2 uppercase tracking-tighter">{t('plan2_name')}</h3>
                <div className="text-4xl font-black text-primary mb-4">{t('plan2_price')}</div>
                <p className="text-muted text-sm mb-8 flex-grow font-medium leading-relaxed">{t('plan2_desc')}</p>
                <Button variant="outline" className="w-full py-5 font-black rounded-xl shadow-premium hover:bg-primary hover:text-white transition-all duration-300">
                  Suscribirse Ahora
                </Button>
              </div>

              {/* Plan 3 */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-surface shadow-sm hover:shadow-premium transition-all reveal reveal-delay-3 flex flex-col">
                <h3 className="text-xl font-black text-foreground mb-2 uppercase tracking-tighter">{t('plan3_name')}</h3>
                <div className="text-4xl font-black text-primary mb-4">{t('plan3_price')}</div>
                <p className="text-muted text-sm mb-8 flex-grow font-medium leading-relaxed">{t('plan3_desc')}</p>
                <Button variant="outline" className="w-full py-5 font-bold rounded-xl border-2">
                  Seleccionar
                </Button>
              </div>
            </div>
          </div>

          {/* Transactions Sidebar */}
          <div className="lg:col-span-1 space-y-8 reveal reveal-delay-3">
            <h2 className="text-2xl font-black text-foreground uppercase tracking-widest border-l-4 border-accent pl-4">{t('transactions').split(' ')[0]}</h2>
            <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] p-6 border border-white shadow-sm space-y-6">
               {[1, 2, 3, 4, 5].map((i) => (
                 <div key={i} className="flex items-center gap-4 animate-in fade-in slide-in-from-right duration-700" style={{ animationDelay: `${i * 150}ms` }}>
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                       <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-xs font-bold text-foreground leading-tight">{t(`transItem${(i % 3) + 1}` as any)}</p>
                       <p className="text-[10px] text-muted font-medium">Hace {i * 2} min</p>
                    </div>
                 </div>
               ))}
               <div className="pt-4 border-t border-white/50">
                  <div className="flex items-center justify-between text-xs font-black text-primary uppercase tracking-widest">
                     <span>Total Comunidad</span>
                     <span>+2,481</span>
                  </div>
               </div>
            </div>
            <div className="bg-primary rounded-3xl p-6 text-white shadow-lg overflow-hidden relative group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Leaf className="w-20 h-20" /></div>
               <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-80">Garantía Eco</p>
               <p className="text-sm font-bold leading-relaxed">Cada transacción planta un árbol en zonas deforestadas.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
