export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-3">Edinburgh Trade Union Council</h4>
          <p className="text-sm">Building worker solidarity in Edinburgh since 19th century. Affiliated to STUC and TUC.</p>
        </div>
        <div>
          <h5 className="text-white font-medium mb-2">Links</h5>
          <ul className="space-y-1 text-sm">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/news" className="hover:text-white">News & Campaigns</a></li>
            <li><a href="/events" className="hover:text-white">Events</a></li>
            <li><a href="/support-at-work" className="hover:text-white">Support@Work</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium mb-2">Contact</h5>
          <p className="text-sm">39 London Road, Edinburgh EH7 5SP</p>
          <p className="text-sm">Email: info@edintuc.org.uk</p>
          <p className="text-sm">Phone: 0131 558 3540</p>
        </div>
        <div>
          <h5 className="text-white font-medium mb-2">Follow</h5>
          <p className="text-sm">Twitter/X, Facebook</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} ETUC. All rights reserved.</div>
    </footer>
  )
}
