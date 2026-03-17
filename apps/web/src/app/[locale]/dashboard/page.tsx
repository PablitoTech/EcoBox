import { getTranslations, setRequestLocale } from 'next-intl/server';
import DashboardClient from '@/components/dashboard/DashboardClient';

export default async function DashboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  // Pre-fetch translations on the server if needed, 
  // but we'll use next-intl client hooks for the interactivity
  
  return <DashboardClient initialLocale={locale} />;
}