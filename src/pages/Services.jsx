import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Services & Projects</h1>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-slate-900">Support@Work</h2>
          <p className="mt-2 text-slate-700">Support@Work provides free, confidential advice for workers in Edinburgh, regardless of union membership. We help with disciplinary issues, unpaid wages, bullying and harassment, and more. You can access Support@Work via phone or email, or by submitting a request online.</p>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-slate-900">Advice & Casework</h2>
          <p className="mt-2 text-slate-700">If you need help with a workplace problem, contact us. Our caseworkers and volunteers can offer guidance, connect you with your union, or help you take collective action.</p>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-slate-900">Training & Solidarity</h2>
          <p className="mt-2 text-slate-700">We run training for reps and workers and coordinate local solidarity for disputes and campaigns across the city.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
