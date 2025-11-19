const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export async function fetchJSON(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json()
}

export const api = {
  base: API_BASE,
  listNews: (params = {}) => {
    const q = new URLSearchParams(params).toString()
    return fetchJSON(`/news${q ? `?${q}` : ''}`)
  },
  getNews: (slug) => fetchJSON(`/news/${slug}`),
  listEvents: () => fetchJSON('/events'),
  submitContact: (payload) => fetchJSON('/contact', { method: 'POST', body: JSON.stringify(payload) }),
  submitSupport: (payload) => fetchJSON('/support-at-work', { method: 'POST', body: JSON.stringify(payload) }),
  rsvp: (payload) => fetchJSON('/rsvp', { method: 'POST', body: JSON.stringify(payload) }),
}
