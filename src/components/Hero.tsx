import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'

type Props = { setTab: (t: 'home' | 'store' | 'admin') => void }

export default function Hero({ setTab }: Props) {
    return (
          <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
            {/* Background Video */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
                        <video
                                    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover scale-105 transition-transform duration-1000"
                                  />
                </div>div>
          
            {/* Hero Text */}
                <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
                        <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                  >
                                  <h1
                                                className="font-display text-[42px] md:text-[56px] font-medium tracking-tight leading-tight mb-4"
                                                style={{ color: '#0a1b33' }}
                                              >
                                              Welcome to<br />HunnuX Store
                                  </h1>h1>
                                  <p
                                                className="font-sans text-[14px] md:text-[15px] max-w-[480px] mb-8 leading-relaxed"
                                                style={{ color: '#64748b' }}
                                              >
                                              Discover premium products curated just for you. Upload your items, set your price, and start selling in minutes — all in one beautiful storefront.
                                  </p>p>
                                  <motion.button
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.97 }}
                                                onClick={() => setTab('store')}
                                                className="bg-[#0a152d] text-white font-semibold px-7 py-3 rounded-full text-sm shadow-lg hover:shadow-xl transition-shadow"
                                              >
                                              Shop Now
                                  </motion.button>motion.button>
                        </motion.div>motion.div>
                </div>div>
          
            {/* Floating Bottom Navbar */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
                        <motion.nav
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40 gap-1"
                                  >
                          {/* Logo */}
                                  <div className="w-9 h-9 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-[#0a1b33] font-bold text-base select-none">
                                              &#10022;
                                  </div>div>
                                  <button
                                                onClick={() => setTab('store')}
                                                className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors px-3 py-2"
                                              >
                                              Products
                                  </button>button>
                                  <button
                                                onClick={() => setTab('admin')}
                                                className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors px-3 py-2"
                                              >
                                              Sell / Admin
                                  </button>button>
                                  <motion.button
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.97 }}
                                                onClick={() => setTab('store')}
                                                className="bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all flex items-center gap-1"
                                              >
                                              Browse Store <ChevronRight size={12} />
                                  </motion.button>motion.button>
                        </motion.nav>motion.nav>
                </div>div>
          </div>div>
        )
}</div>
