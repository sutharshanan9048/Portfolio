import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import NavbarPage from './components/NavbarPage'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'
import SkillPage from './components/SkillPage'
import AllPages from './components/AllPages'

const App = () => {
  return (
    <div>
      <Router>
        <NavbarPage/>
        <Routes>
          <Route path='/' element={<AllPages/>}/>
          <Route path='/nav' element={<NavbarPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/skills' element={<SkillPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </Router>
  
    </div>
  )
}

export default App
