import { 
  Navbar, 
  About, 
  Hero,
  Contact 
} from './sections'
import Footer from './sections/Footer'

import Services from './sections/Services'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
