import { 
  Navbar, 
  About, 
  Hero,
  Contact 
} from './sections'

import { AnimatePresence } from 'framer-motion'

import Footer from './sections/Footer'
import Services from './sections/Services'

function App() {

  return (
    <AnimatePresence>
      <header>
        <Navbar />
      </header>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </AnimatePresence>
  )
}

export default App
