export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center font-bold text-white">E</div>
          <p className="mt-3 text-slate-600">Edinburgh Trade Union Council brings unions together to support workers and build a fairer city.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <ul className="mt-3 text-slate-600 space-y-1">
            <li>info@etuc.org</li>
            <li>0131 000 0000</li>
            <li>Edinburgh, EH1</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-3 text-slate-600 space-y-1">
            <li>Support at Work</li>
            <li>News & Campaigns</li>
            <li>Events</li>
            <li>Join / Affiliate</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Legal</h4>
          <ul className="mt-3 text-slate-600 space-y-1">
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Edinburgh Trade Union Council. All rights reserved.</p>
          <p>Site by ETUC</p>
        </div>
      </div>
    </footer>
  )
}
