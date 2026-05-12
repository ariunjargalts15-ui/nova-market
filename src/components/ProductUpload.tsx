import { useState, useRef } from 'react'
import { motion } from 'motion/react'
import { Upload, ImagePlus, X } from 'lucide-react'
import type { Product } from './Store'

type Props = { onAdd: (p: Omit<Product, 'id'>) => void }

export default function ProductUpload({ onAdd }: Props) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [preview, setPreview] = useState<string | null>(null)
    const [dragOver, setDragOver] = useState(false)
    const fileRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File) => {
        const reader = new FileReader()
        reader.onload = (e) => {
                const url = e.target?.result as string
                setPreview(url)
                setImageUrl(url)
        }
        reader.readAsDataURL(file)
  }

  const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setDragOver(false)
        const file = e.dataTransfer.files[0]
        if (file && file.type.startsWith('image/')) handleFile(file)
  }

  const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name || !price) return
        onAdd({ name, description, price: parseFloat(price), imageUrl, category })
        setName(''); setDescription(''); setPrice(''); setCategory('')
        setImageUrl(''); setPreview(null)
  }

  return (
        <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200/60 rounded-[32px] shadow-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
              >
          {/* Image Upload */}
              <div
                        className={`relative flex flex-col items-center justify-center rounded-[24px] border-2 border-dashed transition-all cursor-pointer ${
                                    dragOver ? 'border-blue-400 bg-blue-50' : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                        } min-h-[260px]`}
                        onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={handleDrop}
                        onClick={() => fileRef.current?.click()}
                      >
                      <input
                                  ref={fileRef}
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
                                />
                {preview ? (
                                  <>
                                              <img src={preview} alt="preview" className="w-full h-full object-cover rounded-[22px] max-h-[250px]" />
                                              <button
                                                              type="button"
                                                              onClick={e => { e.stopPropagation(); setPreview(null); setImageUrl('') }}
                                                              className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow border border-slate-200 hover:bg-red-50 transition"
                                                            >
                                                            <X size={14} className="text-slate-400" />
                                              </button>button>
                                  </>>
                                ) : (
                                  <div className="flex flex-col items-center gap-3 p-8 text-center">
                                              <div className="w-16 h-16 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center">
                                                            <ImagePlus size={24} className="text-slate-400" />
                                              </div>div>
                                              <p className="text-sm font-medium text-slate-500">
                                                            Drag &amp; drop your product image
                                              </p>p>
                                              <p className="text-xs text-slate-400">or click to browse</p>p>
                                              <span className="text-xs bg-slate-100 text-slate-400 px-3 py-1 rounded-full">PNG, JPG, WEBP</span>span>
                                  </div>div>
                      )}
              </div>div>
        
          {/* Form Fields */}
              <div className="flex flex-col gap-4">
                      <div>
                                <label className="text-xs font-semibold text-slate-500 mb-1.5 block">Product Name *</label>label>
                                <input
                                              required
                                              value={name}
                                              onChange={e => setName(e.target.value)}
                                              placeholder="e.g. Premium Sneakers"
                                              className="w-full border border-slate-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-blue-300 bg-slate-50 font-sans"
                                            />
                      </div>div>
                      <div>
                                <label className="text-xs font-semibold text-slate-500 mb-1.5 block">Description</label>label>
                                <textarea
                                              value={description}
                                              onChange={e => setDescription(e.target.value)}
                                              placeholder="Describe your product..."
                                              rows={3}
                                              className="w-full border border-slate-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-blue-300 bg-slate-50 font-sans resize-none"
                                            />
                      </div>div>
                      <div className="grid grid-cols-2 gap-4">
                                <div>
                                            <label className="text-xs font-semibold text-slate-500 mb-1.5 block">Price ($) *</label>label>
                                            <input
                                                            required
                                                            type="number"
                                                            step="0.01"
                                                            min="0"
                                                            value={price}
                                                            onChange={e => setPrice(e.target.value)}
                                                            placeholder="0.00"
                                                            className="w-full border border-slate-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-blue-300 bg-slate-50 font-sans"
                                                          />
                                </div>div>
                                <div>
                                            <label className="text-xs font-semibold text-slate-500 mb-1.5 block">Category</label>label>
                                            <input
                                                            value={category}
                                                            onChange={e => setCategory(e.target.value)}
                                                            placeholder="e.g. Shoes"
                                                            className="w-full border border-slate-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-blue-300 bg-slate-50 font-sans"
                                                          />
                                </div>div>
                      </div>div>
                      <div>
                                <label className="text-xs font-semibold text-slate-500 mb-1.5 block">Image URL (optional, overrides upload)</label>label>
                                <input
                                              value={imageUrl}
                                              onChange={e => { setImageUrl(e.target.value); setPreview(e.target.value) }}
                                              placeholder="https://..."
                                              className="w-full border border-slate-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-blue-300 bg-slate-50 font-sans"
                                            />
                      </div>div>
                      <motion.button
                                  whileHover={{ scale: 1.03 }}
                                  whileTap={{ scale: 0.97 }}
                                  type="submit"
                                  className="mt-2 bg-[#0a152d] text-white font-semibold py-3 rounded-full text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                <Upload size={15} /> Publish Product
                      </motion.button>motion.button>
              </div>div>
        </form>form>
      )
}</></form>
