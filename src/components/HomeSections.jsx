import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../utils/api'

export default function HomeSections() {
  const [news, setNews] = useState([])
  const [events, setEvents] = useState([])
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const [n, e, s] = await Promise.all([
          api.listNews({ limit: 3 }),
          api.listEvents(),
          api.listNews({ category: 'Campaigns', limit: 3 }),
        ])
        setNews(n.slice(0,3))
        setEvents(e.slice(0,3))
        setStories(s.slice(0,3))
      } catch (e) {
        // ignore
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-8">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Latest News</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {loading && <p className="text-slate-500">Loading...</p>}
            {!loading && news.length === 0 && <p className="text-slate-500">No news yet.</p>}
            {news.map((n) => (
              <Link key={n._id} to={`/news/${n.slug}`} className="block p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow">
                <p className="text-xs text-slate-500">{new Date(n.date).toLocaleDateString()}</p>
                <h4 className="font-semibold text-slate-900">{n.title}</h4>
                <p className="text-sm text-slate-600 line-clamp-3">{n.summary}</p>
              </Link>
            ))}
          </div>
          <Link to="/news" className="inline-block mt-3 text-blue-700 font-semibold">See all news →</Link>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900">Upcoming Events</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {!loading && events.length === 0 && <p className="text-slate-500">No events yet.</p>}
            {events.map((ev) => (
              <div key={ev._id} className="p-4 rounded-lg border border-slate-200">
                <p className="text-xs text-slate-500">{new Date(ev.date).toLocaleString()}</p>
                <h4 className="font-semibold text-slate-900">{ev.title}</h4>
                <p className="text-sm text-slate-600">{ev.location}</p>
              </div>
            ))}
          </div>
          <Link to="/events" className="inline-block mt-3 text-blue-700 font-semibold">View calendar →</Link>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900">Success Stories</h3>
        <div className="mt-4 space-y-3">
          {!loading && stories.length === 0 && <p className="text-slate-500">Coming soon.</p>}
          {stories.map((s) => (
            <div key={s._id} className="p-4 rounded-lg border border-slate-200">
              <p className="text-xs text-slate-500">{new Date(s.date).toLocaleDateString()}</p>
              <h4 className="font-semibold text-slate-900">{s.title}</h4>
              <p className="text-sm text-slate-600 line-clamp-3">{s.summary}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
          <h4 className="font-semibold text-blue-900">Quick Links</h4>
          <ul className="mt-2 list-disc pl-5 text-sm text-blue-900/90 space-y-1">
            <li><Link to="/support-at-work" className="underline">Support@Work</Link></li>
            <li><Link to="/get-involved" className="underline">Affiliate your branch</Link></li>
            <li><Link to="/services" className="underline">Advice & resources</Link></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
