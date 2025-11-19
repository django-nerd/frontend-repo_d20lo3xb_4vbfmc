import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import News from './pages/News'
import Events from './pages/Events'
import GetInvolved from './pages/GetInvolved'
import SupportAtWork from './pages/SupportAtWork'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/news" element={<News />} />
      <Route path="/events" element={<Events />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/support-at-work" element={<SupportAtWork />} />
    </Routes>
  )
}

export default App
