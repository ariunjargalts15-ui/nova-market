import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ProductCard from './ProductCard'
import ProductUpload from './ProductUpload'

export type Product = {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: string
}

const STORAGE_KEY = 'hunnux_products'

export default function Store({ adminMode }: { adminMode: boolean }) {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) setProducts(JSON.parse(stored))
  }, [])

  const saveProducts = (list: Product[]) => {
    setProducts(list)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  }

  const addProduct = (p: Omit<Product, 'id'>) => {
    saveProducts([{ ...p, id: uuidv4() }, ...products])
  }

  const deleteProduct = (id: string) => {
    saveProducts(products.filter(p => p.id !== id))
  }

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))]

  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'All' || p.category === category
    return matchSearch && matchCat
  })

  return (
    <div className="max-w-[1400px] mx-auto mt-12">
      {adminMode && (
        <div className="mb-10">
          <h2 className="font-display text-2xl font-semibold text-[#0a1b33] mb-6">
            &#10022; Add New Product
          </h2>
          <ProductUpload onAdd={addProduct} />
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="font-display text-2xl font-semibold text-[#0a1b33]">
          {adminMode ? 'Manage Products' : 'Our Products'}
          <span className="ml-2 text-sm font-sans font-normal text-slate-400">({filtered.length} items)</span>
        </h2>
        <div className="flex gap-3 flex-wrap">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border border-slate-200 rounded-full px-4 py-2 text-sm outline-none focus:border-blue-300 bg-white shadow-sm"
          />
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  category === cat
                    ? 'bg-[#0a152d] text-white shadow'
                    : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24 text-slate-400 font-sans">
          <div className="text-5xl mb-4">🛍️</div>
          <p className="text-lg font-medium">No products yet.</p>
          {adminMode && <p className="text-sm mt-1">Add your first product above!</p>}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              adminMode={adminMode}
              onDelete={deleteProduct}
            />
          ))}
        </div>
      )}
    </div>
  )
}
