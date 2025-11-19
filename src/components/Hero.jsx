import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[11px] tracking-widest uppercase text-slate-500">For workers. For fairness. For Edinburgh.</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight">Strong representation and practical support for workers across Edinburgh</h1>
            <p className="mt-5 text-[17px] text-slate-600 max-w-xl">We bring unions together to protect rights, resolve disputes, and improve conditions. Get help with workplace issues or join the movement today.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/support-at-work" className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800">Get Support</Link>
              <Link to="/get-involved" className="px-6 py-3 rounded-full border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50">Join / Affiliate</Link>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
              <div>
                <div className="font-semibold text-slate-900">100+ branches</div>
                <div>Affiliated</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">150 years</div>
                <div>Of solidarity</div>
              </div>
              <div>
                <div className="font-semibold text-slate-900">City-wide</div>
                <div>Representation</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-[0_10px_40px_rgba(2,6,23,0.06)]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-amber-300/50 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-slate-900/10 blur-2xl" />
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100" />
    </section>
  )
}
