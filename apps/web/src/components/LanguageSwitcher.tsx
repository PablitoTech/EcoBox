'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return (
    <div className="bg-surface p-1 rounded-full flex items-center relative border border-white/50 shadow-inner">
      <motion.div
        initial={false}
        animate={{ x: locale === 'es' ? 0 : '100%' }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute w-1/2 h-[calc(100%-8px)] bg-white rounded-full shadow-sm mx-1"
      />
      <button
        onClick={() => toggleLocale('es')}
        className={`relative z-10 px-4 py-1.5 text-xs font-bold transition-colors ${
          locale === 'es' ? 'text-primary' : 'text-muted hover:text-foreground'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => toggleLocale('en')}
        className={`relative z-10 px-4 py-1.5 text-xs font-bold transition-colors ${
          locale === 'en' ? 'text-primary' : 'text-muted hover:text-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
}