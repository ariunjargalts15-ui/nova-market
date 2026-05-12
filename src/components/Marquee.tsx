const logos = [
  { src: 'https://svgl.app/library/shopify.svg', alt: 'Shopify', from: '#96bf48', to: '#5e8e3e' },
  { src: 'https://svgl.app/library/figma.svg', alt: 'Figma', from: '#a259ff', to: '#1abcfe' },
  { src: 'https://svgl.app/library/blender.svg', alt: 'Blender', from: '#4772b3', to: '#e87d0d' },
  { src: 'https://svgl.app/library/spotify.svg', alt: 'Spotify', from: '#ff6b6b', to: '#1db954' },
  { src: 'https://svgl.app/library/google_cloud.svg', alt: 'Google Cloud', from: '#4285f4', to: '#34a853' },
  { src: 'https://svgl.app/library/vercel.svg', alt: 'Vercel', from: '#000000', to: '#555555' },
  { src: 'https://svgl.app/library/react.svg', alt: 'React', from: '#61dafb', to: '#0070f3' },
  { src: 'https://svgl.app/library/tailwindcss.svg', alt: 'Tailwind CSS', from: '#38bdf8', to: '#0ea5e9' },
  ]

const allLogos = [...logos, ...logos]

export default function Marquee() {
    return (
          <div className="mt-10 max-w-[1400px] mx-auto overflow-hidden" style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}>
                  <div className="flex gap-4 marquee-track w-max">
                    {allLogos.map((logo, i) => (
                      <div
                                    key={i}
                                    className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden"
                                  >
                        {/* Gradient hover bg */}
                                  <div
                                                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150 group-hover:scale-100 rounded-full"
                                                  style={{ background: `linear-gradient(135deg, ${logo.from}, ${logo.to})` }}
                                                />
                                  <img
                                                  src={logo.src}
                                                  alt={logo.alt}
                                                  className="relative z-10 h-10 w-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                                />
                      </div>
                    ))}
                  </div>
          </div>
        )
}</div>
