import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700" />
      <svg className="absolute inset-0 opacity-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 400">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#fff" stopOpacity=".2" offset="0%"/>
            <stop stopColor="#fff" stopOpacity="0" offset="100%"/>
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#g)"/>
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-28 text-white">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">Edinburgh Trade Union Council – Building Worker Solidarity in Edinburgh</h1>
        <p className="mt-5 text-lg text-blue-100 max-w-2xl">We bring together unions and workers across Edinburgh to defend rights, improve conditions, and build a fairer city for all.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/get-involved" className="px-5 py-3 rounded-md bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300">Join Us / Affiliate</Link>
          <Link to="/support-at-work" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20">Support @ Work</Link>
          <Link to="/services" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20">Get Advice</Link>
          <Link to="/news" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20">News & Events</Link>
        </div>
      </div>
    </section>
  )
}
