import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { api } from '../utils/api'

export default function Events() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.listEvents()
        setItems(data)
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Events</h1>
        <div className="mt-6 space-y-4">
          {items.length === 0 && <p className="text-slate-600">No upcoming events.</p>}
          {items.map(ev => (
            <div key={ev._id} className="p-4 border rounded-lg">
              <p className="text-xs text-slate-500">{new Date(ev.date).toLocaleString()}</p>
              <h3 className="text-xl font-semibold text-slate-900">{ev.title}</h3>
              <p className="text-slate-700">{ev.description}</p>
              <p className="text-slate-700">{ev.location}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
