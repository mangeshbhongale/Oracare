import Navbar from './components/Navbar'

import './App.css'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Profile from './components/Profile'
import AppointmentForm from './components/AppointmentForm'
import Footer from './components/Footer'

function App() {
 
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className='w-full h-10'></div>
      <Services/>
      <About/>
      <Testimonials/>
      <Profile/>
      <div className='w-full h-10'></div>
      <AppointmentForm/>
      <Footer/>
    </>
  )
}

export default App
