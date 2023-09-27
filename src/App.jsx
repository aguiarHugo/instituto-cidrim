import { 
  Navbar, 
  About, 
  Hero } 
  from './sections'
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
    </>
  )
}

export default App
