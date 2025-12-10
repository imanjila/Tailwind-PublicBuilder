import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Services from './components/Services'
import Footer from './components/Footer'
import OurTeam from './components/OurTeam'
import Consultation from './components/Consultation'

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="w-full overflow-hidden">
              <Header />
              <About />
              <Projects />
              <Services />
              <OurTeam />
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* Consultation Page */}
        <Route path="/consultation" element={<Consultation />} />

      </Routes>
    </Router>
  )
}

export default App
