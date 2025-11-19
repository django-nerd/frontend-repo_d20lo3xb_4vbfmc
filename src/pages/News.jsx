import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { api } from '../utils/api'

export default function News() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const data = await api.listNews({ category: category || undefined, search: search || undefined })
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [category, search])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">News & Campaigns</h1>

        <div className="mt-6 flex flex-wrap gap-3 items-center">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="border rounded px-3 py-2">
            <option value="">All</option>
            <option>Campaigns</option>
            <option>Events</option>
            <option>Press Releases</option>
          </select>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="border rounded px-3 py-2 flex-1 min-w-[200px]" />
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {loading && <p className="text-slate-500">Loading...</p>}
          {!loading && items.length === 0 && <p className="text-slate-500">No items found.</p>}
          {items.map(n => (
            <article key={n._id} className="p-5 border rounded-lg hover:shadow">
              <p className="text-xs text-slate-500">{new Date(n.date).toLocaleDateString()} • {n.category}</p>
              <h3 className="text-xl font-semibold text-slate-900">{n.title}</h3>
              <p className="text-slate-700">{n.summary}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
