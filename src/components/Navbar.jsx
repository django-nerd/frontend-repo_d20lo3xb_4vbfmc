import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) => `px-3 py-2 text-sm font-medium tracking-wide transition-colors ${isActive ? 'text-slate-900 underline underline-offset-8 decoration-2' : 'text-slate-600 hover:text-slate-900'}`

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center font-bold text-white">E</div>
          <div className="flex flex-col leading-tight">
            <span className="text-slate-900 font-semibold">Edinburgh Trade Union Council</span>
            <span className="text-[11px] text-slate-500 tracking-wider uppercase">Est. 19th Century</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/news" className={linkClass}>News</NavLink>
          <NavLink to="/events" className={linkClass}>Events</NavLink>
          <NavLink to="/support-at-work" className={linkClass}>Support</NavLink>
          <NavLink to="/get-involved" className={({ isActive }) => `${isActive ? 'bg-amber-500 text-slate-900' : 'bg-slate-900 text-white hover:bg-slate-800'} ml-3 px-4 py-2 rounded-full text-sm font-semibold transition-colors`}>Join</NavLink>
        </nav>
        <button className="md:hidden text-slate-900" onClick={() => setOpen(!open)} aria-label="Open menu"><Menu /></button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink to="/news" className={linkClass} onClick={() => setOpen(false)}>News</NavLink>
            <NavLink to="/events" className={linkClass} onClick={() => setOpen(false)}>Events</NavLink>
            <NavLink to="/support-at-work" className={linkClass} onClick={() => setOpen(false)}>Support</NavLink>
            <NavLink to="/get-involved" className="px-4 py-2 rounded-full text-sm font-semibold bg-slate-900 text-white" onClick={() => setOpen(false)}>Join</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
