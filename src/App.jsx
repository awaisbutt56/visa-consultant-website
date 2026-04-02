import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StudyVisa from './pages/StudyVisa'
import WorkPermit from './pages/WorkPermit'
import TouristVisa from './pages/TouristVisa'
import Residency from './pages/Residency'
import ApplicationForm from './pages/ApplicationForm'
import Footerpolicy from './pages/Footerpolicy'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />

        {/* Visa Services Routes */}
        <Route path='/study-visa' element={<StudyVisa />} />
        <Route path='/work-permit' element={<WorkPermit />} />
        <Route path='/tourist-visa' element={<TouristVisa />} />
        <Route path='/residency' element={<Residency />} />
        <Route path='/policy' element={<Footerpolicy />} />

        <Route path='/applicationform' element={<ApplicationForm />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App