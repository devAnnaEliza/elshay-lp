import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'

export default function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
      </main>
    </div>
  )
}
