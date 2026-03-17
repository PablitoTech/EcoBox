'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { 
  Package, Leaf, Droplets, TreePine, LayoutDashboard, 
  CreditCard, Settings, LogOut, CheckCircle, FileText, Download, User, MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

type Tab = 'overview' | 'orders' | 'billing' | 'settings';

export default function DashboardClient({ initialLocale }: { initialLocale: string }) {
  const t = useTranslations('DashboardPage');
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const SidebarItem = ({ id, icon: Icon, label }: { id: Tab, icon: any, label: string }) => (
    <button 
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
        activeTab === id ? 'bg-surface text-primary font-bold shadow-sm' : 'text-muted hover:bg-surface/50'
      }`}
    >
      <Icon className="w-5 h-5" /> {label}
    </button>
  );

  return (
    <main className="min-h-screen bg-background flex flex-col md:flex-row pb-20">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-surface p-6">
        <div className="font-bold text-foreground/40 uppercase tracking-widest text-[10px] mb-6 px-4">Menu</div>
        <nav className="space-y-1">
          <SidebarItem id="overview" icon={LayoutDashboard} label={t('sidebar.overview')} />
          <SidebarItem id="orders" icon={Package} label={t('sidebar.orders')} />
          <SidebarItem id="billing" icon={CreditCard} label={t('sidebar.billing')} />
          <SidebarItem id="settings" icon={Settings} label={t('sidebar.settings')} />
        </nav>
        <div className="mt-8 pt-8 border-t border-surface">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors">
            <LogOut className="w-5 h-5" /> {t('sidebar.logout')}
          </button>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 p-6 md:p-12 max-w-5xl">
        {activeTab === 'overview' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h1 className="text-3xl font-bold text-foreground mb-2">{t('welcome')}</h1>
            <p className="text-muted mb-10">Resumen de tu cuenta y suscripción activa.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20"><Package className="w-32 h-32" /></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span> Activo
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{t('status')}</h2>
                  <p className="text-white/80 mb-6 max-w-md">{t('status_desc')}</p>
                  <Button variant="outline" className="bg-white text-primary border-primary hover:bg-primary hover:text-white transition-all duration-300 font-bold">Gestionar</Button>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-surface shadow-sm">
                <h3 className="font-bold text-foreground mb-6">{t('impactTitle')}</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><Droplets className="w-6 h-6" /></div>
                    <div><div className="font-bold">{t('impact1')}</div><div className="text-sm text-muted">{t('impact1_desc')}</div></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-500"><Leaf className="w-6 h-6" /></div>
                    <div><div className="font-bold">{t('impact2')}</div><div className="text-sm text-muted">{t('impact2_desc')}</div></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600"><TreePine className="w-6 h-6" /></div>
                    <div><div className="font-bold">{t('impact3')}</div><div className="text-sm text-muted">{t('impact3_desc')}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h1 className="text-3xl font-bold text-foreground mb-2">{t('orders.detail_title')}</h1>
            <p className="text-muted mb-8">Listado detallado de todas tus EcoBoxes anteriores.</p>
            <div className="bg-white rounded-3xl border border-surface shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-surface/50 text-muted text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">{t('orders.id')}</th>
                    <th className="px-6 py-4">Fecha</th>
                    <th className="px-6 py-4">Estado</th>
                    <th className="px-6 py-4">Total</th>
                    <th className="px-6 py-4">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface">
                  {[1, 2, 3].map((i) => (
                    <tr key={i} className="hover:bg-surface/10 transition-colors">
                      <td className="px-6 py-4 font-mono text-sm">#EB-9042{i}</td>
                      <td className="px-6 py-4 text-sm text-muted">1{i} Oct, 2023</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 uppercase">
                          <CheckCircle className="w-3 h-3" /> {t('delivered')}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold">$25.99</td>
                      <td className="px-6 py-4"><Button variant="ghost" size="sm" className="text-xs">Ver detalle</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h1 className="text-3xl font-bold text-foreground mb-2">{t('billing.title')}</h1>
            <p className="text-muted mb-8">Administra tus métodos de pago y descarga tus facturas.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-3xl border border-surface shadow-sm">
                <h3 className="font-bold mb-4 flex items-center gap-2"><CreditCard className="w-5 h-5 text-primary" /> {t('billing.method')}</h3>
                <div className="flex items-center justify-between p-4 bg-surface/30 rounded-2xl border border-surface">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-6 bg-primary/10 rounded flex items-center justify-center font-bold text-[10px] text-primary">VISA</div>
                    <div><div className="text-sm font-bold">{t('billing.card_ending')}</div><div className="text-xs text-muted">{t('billing.exp')}</div></div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary text-xs">Editar</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-surface shadow-sm overflow-hidden">
              <div className="p-6 border-b border-surface font-bold">{t('billing.invoices')}</div>
              <table className="w-full text-left">
                <tbody className="divide-y divide-surface">
                  {[1, 2].map((i) => (
                    <tr key={i} className="hover:bg-surface/10 transition-colors">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <FileText className="w-5 h-5 text-muted" />
                        <div><div className="text-sm font-bold">INV-00{i}</div><div className="text-xs text-muted">1{i} Oct, 2023</div></div>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold">$25.99</td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm" className="gap-2 text-xs"><Download className="w-3.5 h-3.5" /> PDF</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <h1 className="text-3xl font-bold text-foreground mb-2">{t('settings.title')}</h1>
            <p className="text-muted mb-8">Actualiza tu información personal y dirección de envío.</p>
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-surface shadow-sm max-w-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2 flex items-center gap-2"><User className="w-4 h-4 text-muted" /> {t('settings.name')}</label>
                  <input type="text" defaultValue="Juan David" className="w-full px-4 py-3 bg-surface border border-surface rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2 flex items-center gap-2">@ {t('settings.email')}</label>
                  <input type="email" defaultValue="hola@ecobox.com" className="w-full px-4 py-3 bg-surface border border-surface rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2 flex items-center gap-2"><MapPin className="w-4 h-4 text-muted" /> {t('settings.address')}</label>
                  <textarea rows={3} defaultValue="Calle Sostenible 123, Ciudad Verde, CP 08001" className="w-full px-4 py-3 bg-surface border border-surface rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <Button className="w-full py-4 mt-4">{t('settings.save')}</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}