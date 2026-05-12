import { motion } from 'motion/react'
import { Trash2, ShoppingCart } from 'lucide-react'
import type { Product } from './Store'

type Props = {
    product: Product
    adminMode: boolean
    onDelete: (id: string) => void
}

export default function ProductCard({ product, adminMode, onDelete }: Props) {
    return (
          <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-[28px] border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all overflow-hidden group flex flex-col"
                >
            {/* Image */}
                <div className="relative overflow-hidden aspect-square bg-slate-50">
                  {product.imageUrl ? (
                            <img
                                          src={product.imageUrl}
                                          alt={product.name}
                                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-5xl text-slate-200">
                                        📦
                            </div>
                        )}
                  {product.category && (
                            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-semibold text-slate-600 px-3 py-1 rounded-full border border-slate-200/60 shadow-sm">
                              {product.category}
                            </span>
                        )}
                </div>
          
            {/* Info */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                        <h3 className="font-display font-semibold text-[#0a1b33] text-base leading-snug line-clamp-2">
                          {product.name}
                        </h3>
                  {product.description && (
                            <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-2">
                              {product.description}
                            </p>
                        )}
                        <div className="mt-auto pt-3 flex items-center justify-between">
                                  <span className="font-display font-semibold text-lg text-[#0a1b33]">
                                              ${Number(product.price).toFixed(2)}
                                  </span>
                                  <div className="flex gap-2">
                                    {adminMode ? (
                                <motion.button
                                                  whileHover={{ scale: 1.07 }}
                                                  whileTap={{ scale: 0.95 }}
                                                  onClick={() => onDelete(product.id)}
                                                  className="bg-red-50 text-red-500 border border-red-100 hover:bg-red-500 hover:text-white transition-all px-3 py-2 rounded-full text-xs font-semibold flex items-center gap-1"
                                                >
                                                <Trash2 size={12} /> Delete
                                </motion.button>
                              ) : (
                                <motion.button
                                                  whileHover={{ scale: 1.07 }}
                                                  whileTap={{ scale: 0.95 }}
                                                  className="bg-[#0a152d] text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1 shadow hover:shadow-md transition-all"
                                                >
                                                <ShoppingCart size={12} /> Add to Cart
                                </motion.button>
                              )}
                                  </div>
                        </div>
                </div>
          </motion.div>
        )
}
