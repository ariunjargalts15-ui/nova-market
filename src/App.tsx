import { useState } from 'react'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Store from './components/Store'

type Tab = 'home' | 'store' | 'admin'

export default function App() {
    const [tab, setTab] = useState<Tab>('home')

  return (
        <div className="min-h-screen" style={{ background: '#f9fafb' }}>
          {/* Top Nav */}
                <nav className="flex items-center justify-between px-8 py-4 max-w-[1400px] mx-auto">
                        <span className="font-display font-semibold text-xl text-[#0a1b33] tracking-tight">
                                  HunnuX <span className="text-blue-500">Store</span>
                        </span>
                        <div className="flex gap-2">
                          {(['home', 'store', 'admin'] as Tab[]).map(t => (
                      <button
                                      key={t}
                                      onClick={() => setTab(t)}
                                      className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                                                        tab === t
                                                          ? 'bg-[#0a152d] text-white shadow'
                                                          : 'text-slate-500 hover:text-[#0a1b33]'
                                      }`}
                                    >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                        </div>
                </nav>
        
          {tab === 'home' && (
                  <main className="px-4 pb-16">
                            <Hero setTab={setTab} />
                            <Marquee />
                            <Store adminMode={false} />
                  </main>
              )}
          {tab === 'store' && (
                  <main className="px-4 pb-16 max-w-[1400px] mx-auto">
                            <Store adminMode={false} />
                  </main>
              )}
          {tab === 'admin' && (
                  <main className="px-4 pb-16 max-w-[1400px] mx-auto">
                            <Store adminMode={true} />
                  </main>
              )}
        </div>
      )
}</nav>
