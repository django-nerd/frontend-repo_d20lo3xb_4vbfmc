import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { api } from '../utils/api'

export default function SupportAtWork() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      postcode: form.get('postcode') || undefined,
      union_member: form.get('union_member') === 'on',
      employer: form.get('employer') || undefined,
      issue: form.get('issue'),
    }

    try {
      setLoading(true)
      setStatus('')
      await api.submitSupport(payload)
      setStatus('Thanks – a caseworker will contact you soon.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Sorry, something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Support@Work</h1>
        <p className="mt-2 text-slate-700">Free, confidential workplace advice for workers in Edinburgh. You do not need to be a union member to contact us. We can help with disciplinaries, dismissals, unpaid wages, health & safety, discrimination, bullying and more.</p>

        <div className="mt-6 p-4 rounded bg-blue-50 border border-blue-200 text-blue-900">
          <p><strong>Contact:</strong> support@edintuc.org.uk • 0131 558 3540 • 39 London Road, Edinburgh EH7 5SP</p>
        </div>

        <h2 className="mt-8 text-2xl font-semibold text-slate-900">Request support</h2>
        <form onSubmit={submit} className="mt-4 space-y-4 p-6 border rounded-lg">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input name="name" required className="mt-1 w-full border rounded px-3 py-2"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input name="email" type="email" required className="mt-1 w-full border rounded px-3 py-2"/>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input name="phone" className="mt-1 w-full border rounded px-3 py-2"/>
            </div>
            <div>
              <label className="block text-sm font-medium">Postcode</label>
              <input name="postcode" className="mt-1 w-full border rounded px-3 py-2"/>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Employer</label>
              <input name="employer" className="mt-1 w-full border rounded px-3 py-2"/>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <input id="union_member" name="union_member" type="checkbox" className="h-4 w-4"/>
              <label htmlFor="union_member" className="text-sm">I am a union member</label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Describe your issue</label>
            <textarea name="issue" rows={6} required className="mt-1 w-full border rounded px-3 py-2"></textarea>
          </div>
          <button disabled={loading} className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-500 disabled:opacity-60">{loading ? 'Sending...' : 'Submit'}</button>
          {status && <p className="text-sm text-slate-700">{status}</p>}
        </form>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
          <ul className="mt-2 list-disc pl-6 text-slate-700 space-y-1">
            <li>Is it confidential? Yes.</li>
            <li>Do I need to be a union member? No, but we will help you join.</li>
            <li>What areas do you cover? Edinburgh and surrounding area.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
