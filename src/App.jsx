import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Projects from './components/ProjectSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='background-color open-sans-opensans'>
      <header className='container flex flex-col gap-21 mx-auto'>
        <Navbar />
        <Hero />
        <Bio />
      </header>
      <main className='container flex flex-col items-center justify-center p-2 md:p-6 mx-auto'>
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
