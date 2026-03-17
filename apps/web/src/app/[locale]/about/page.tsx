import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Leaf, Heart, Globe2 } from 'lucide-react';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('AboutPage');
  
  return (
    <main className="flex flex-col min-h-screen pt-12 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-4xl text-center mb-24">
        <div className="w-20 h-20 bg-surface rounded-3xl mx-auto flex items-center justify-center mb-8 rotate-3 shadow-sm">
          <Leaf className="w-10 h-10 text-primary -rotate-3" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">{t('title')}</h1>
        <p className="text-xl text-muted leading-relaxed">
          {t('subtitle')}
        </p>
      </section>

      {/* Story Content */}
      <section className="container mx-auto px-6 max-w-4xl mb-24">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-surface relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 text-surface opacity-50 -z-10">
            <Globe2 className="w-64 h-64" />
          </div>
          <div className="relative z-10 text-lg text-foreground/80 space-y-8 leading-relaxed">
            <p>{t('content1')}</p>
            <p>{t('content2')}</p>
          </div>
        </div>
      </section>

      {/* Team Mockup */}
      <section className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-foreground mb-12">{t('teamTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-56 h-56 rounded-full mb-6 border-8 border-white shadow-xl relative overflow-hidden transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={`/team-${i}.png`} 
                  alt={t(`team${i}_name` as any)} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{t(`team${i}_name` as any)}</h3>
              <p className="text-primary font-medium">{t(`team${i}_role` as any)}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}