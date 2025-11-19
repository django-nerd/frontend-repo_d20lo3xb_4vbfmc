import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-blue-600' : 'text-slate-200 hover:text-white hover:bg-slate-700/60'}`

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/70 border-b border-slate-700/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-blue-600 flex items-center justify-center font-bold text-white">ETUC</div>
          <span className="text-white font-semibold hidden sm:block">Edinburgh Trade Union Council</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/news" className={linkClass}>News</NavLink>
          <NavLink to="/events" className={linkClass}>Events</NavLink>
          <NavLink to="/support-at-work" className={linkClass}>Support@Work</NavLink>
          <NavLink to="/get-involved" className="ml-2 px-3 py-2 rounded-md text-sm font-semibold bg-amber-500 text-slate-900 hover:bg-amber-400">Join</NavLink>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Open menu"><Menu /></button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-700/40">
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink to="/news" className={linkClass} onClick={() => setOpen(false)}>News</NavLink>
            <NavLink to="/events" className={linkClass} onClick={() => setOpen(false)}>Events</NavLink>
            <NavLink to="/support-at-work" className={linkClass} onClick={() => setOpen(false)}>Support@Work</NavLink>
            <NavLink to="/get-involved" className="px-3 py-2 rounded-md text-sm font-semibold bg-amber-500 text-slate-900" onClick={() => setOpen(false)}>Join</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
