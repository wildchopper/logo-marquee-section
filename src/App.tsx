import './App.css'
import { LogoMarquee } from './components/LogoMarquee'

export default function App() {
  return (
    <>
      <main className='main-wrapper'>
        <section className='section' aria-labelledby='logo-marquee-title'>
          <div className='section-content'>
            <h1 className='section-header' id='logo-marquee-title'>
              Used by teams that you love
            </h1>
            <LogoMarquee />
          </div>
        </section>
      </main>
    </>
  )
}
