import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { api } from '../utils/api'

export default function GetInvolved() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      message: form.get('message'),
      type: form.get('type')
    }

    try {
      setLoading(true)
      setStatus('')
      await api.submitContact(payload)
      setStatus('Thanks – we will be in touch soon!')
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
        <h1 className="text-3xl font-bold text-slate-900">Get Involved / Join</h1>
        <p className="mt-2 text-slate-700">Affiliated branches and individual union members make ETUC strong. Use the form below to affiliate your branch or volunteer.</p>

        <form onSubmit={submit} className="mt-6 space-y-4 p-6 border rounded-lg">
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
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input name="phone" className="mt-1 w-full border rounded px-3 py-2"/>
          </div>
          <div>
            <label className="block text-sm font-medium">I am contacting about</label>
            <select name="type" required className="mt-1 w-full border rounded px-3 py-2">
              <option value="affiliate">Branch affiliation</option>
              <option value="volunteer">Volunteering</option>
              <option value="general">General</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" rows={5} required className="mt-1 w-full border rounded px-3 py-2"></textarea>
          </div>
          <button disabled={loading} className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-500 disabled:opacity-60">{loading ? 'Sending...' : 'Send'}</button>
          {status && <p className="text-sm text-slate-700">{status}</p>}
        </form>
      </main>
      <Footer />
    </div>
  )
}
