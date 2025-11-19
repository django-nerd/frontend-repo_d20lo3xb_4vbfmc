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
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-baseline justify-between">
              <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Latest News</h3>
              <Link to="/news" className="text-sm text-slate-600 hover:text-slate-900 underline underline-offset-4">All news</Link>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {loading && <p className="text-slate-500">Loading...</p>}
              {!loading && news.length === 0 && <p className="text-slate-500">No news yet.</p>}
              {news.map((n) => (
                <Link key={n._id} to={`/news/${n.slug}`} className="group block rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="p-5">
                    <p className="text-[11px] uppercase tracking-wider text-slate-500">{new Date(n.date).toLocaleDateString()} • {n.category || 'News'}</p>
                    <h4 className="mt-2 text-lg font-semibold text-slate-900 group-hover:underline underline-offset-4">{n.title}</h4>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-3">{n.summary}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-14">
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Upcoming Events</h3>
                <Link to="/events" className="text-sm text-slate-600 hover:text-slate-900 underline underline-offset-4">Calendar</Link>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                {!loading && events.length === 0 && <p className="text-slate-500">No events yet.</p>}
                {events.map((ev) => (
                  <div key={ev._id} className="rounded-xl border border-slate-200 p-5">
                    <p className="text-[11px] uppercase tracking-wider text-slate-500">{new Date(ev.date).toLocaleString()}</p>
                    <h4 className="mt-2 text-lg font-semibold text-slate-900">{ev.title}</h4>
                    <p className="mt-1 text-sm text-slate-600">{ev.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Success Stories</h3>
              <div className="mt-4 space-y-4">
                {!loading && stories.length === 0 && <p className="text-slate-500">Coming soon.</p>}
                {stories.map((s) => (
                  <div key={s._id} className="border-b last:border-none border-slate-200 pb-4">
                    <p className="text-[11px] uppercase tracking-wider text-slate-500">{new Date(s.date).toLocaleDateString()}</p>
                    <h4 className="mt-1 font-medium text-slate-900">{s.title}</h4>
                    <p className="text-sm text-slate-600 line-clamp-3">{s.summary}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-5">
                <h4 className="font-semibold text-slate-900">Need help at work?</h4>
                <p className="mt-1 text-sm text-slate-600">Our team can guide you through grievances, disciplinaries, and more.</p>
                <Link to="/support-at-work" className="mt-3 inline-block text-sm font-semibold text-slate-900 underline underline-offset-4">Get Support</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="border-t border-slate-100" />
    </section>
  )
}
