import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'

export default function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
      </main>
    </div>
  )
}
