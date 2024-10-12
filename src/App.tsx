
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Location from './pages/locations'
import Service from './pages/services'
import Register from './pages/register'
import Form from './pages/form'

import Homepage from './home-page/landing'

function App() {
  return (
    <Router>
      <Routes>

      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Homepage />} />
      <Route path='/services' element={<Service />} />
      <Route path='/locations' element={<Location />} />
      <Route path='/booking' element={<Form />} />

        
      </Routes>
    </Router>
  )
}

export default App
