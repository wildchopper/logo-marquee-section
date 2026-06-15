import './App.css'
import WanNain from './assets/logo.svg'
import Robinwood from './assets/logo-1.svg'
import Bitterfly from './assets/logo-2.svg'
import Swapdo from './assets/logo-3.svg'
import Wirang from './assets/logo-4.svg'
import Diamond from './assets/logo-5.svg'
import AirCar from './assets/logo-6.svg'
import MakroHard from './assets/logo-7.svg'

export default function App() {
  return (
    <>
      <main className='main-wrapper'>
        <section className='section'>
          <div className='section-content'>
            <h1 className='section-header'>Used by teams that you love</h1>
            <div className='section-images'>
              <div className='section-images__track'>
                <img aria-hidden src={WanNain}/>
                <img aria-hidden src={Robinwood}/>
                <img aria-hidden src={Bitterfly}/>
                <img aria-hidden src={Swapdo}/>
                <img aria-hidden src={Wirang}/>
                <img aria-hidden src={Diamond}/>
                <img aria-hidden src={AirCar}/>
                <img aria-hidden src={MakroHard}/>

                <img aria-hidden src={WanNain}/>
                <img aria-hidden src={Robinwood}/>
                <img aria-hidden src={Bitterfly}/>
                <img aria-hidden src={Swapdo}/>
                <img aria-hidden src={Wirang}/>
                <img aria-hidden src={Diamond}/>
                <img aria-hidden src={AirCar}/>
                <img aria-hidden src={MakroHard}/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}