import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Location from './pages/locations'
import Service from './pages/services'
import Header from './base-components/header'
import Form from './pages/form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Homepage from './home-page/landing'
function App() {
  return (
    <Router>
      <Routes>

      <Route path='/a' element={<Homepage />} />
      <Route path='/services' element={<Service />} />
      <Route path='/locations' element={<Location />} />
      <Route path='/booking' element={<Form />} />

        
      </Routes>
    </Router>
  )
}

export default App
