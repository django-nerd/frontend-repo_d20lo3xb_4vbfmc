import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeSections from '../components/HomeSections'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HomeSections />
      <Footer />
    </div>
  )
}
