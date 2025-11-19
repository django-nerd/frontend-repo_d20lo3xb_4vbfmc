import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">About ETUC</h1>
        <p className="mt-4 text-slate-700">Edinburgh Trade Union Council brings together affiliated trade union branches across the city to coordinate solidarity, campaign for better workplaces, and build community. We work closely with the STUC and the wider trade union movement to represent workers’ interests locally.</p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">History</h2>
          <p className="mt-2 text-slate-700">Founded in the late 19th century, ETUC has supported generations of workers in Edinburgh. From early campaigns for fair pay and safety to modern struggles for equality and secure work, we stand with workers wherever they are.</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">Structure & People</h2>
          <p className="mt-2 text-slate-700">We are a democratic council of affiliated union branches. Officers are elected annually and supported by committees for campaigns, support, and education.</p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">Values & Mission</h2>
          <ul className="mt-2 list-disc pl-6 text-slate-700 space-y-1">
            <li>Solidarity and mutual aid</li>
            <li>Equality and respect at work</li>
            <li>Community organising and collective action</li>
            <li>Democratic accountability</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
