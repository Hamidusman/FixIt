
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Location from './pages/locations'
import Service from './pages/services'
import Form from './pages/form'

import Register from './pages/register'
import Login from './pages/login';
import Homepage from './home-page/landing'
import UserDashboard from './pages/user-dashboard';
import CreateProfile from './pages/profile';

function App() {
  return (
    <Router>
      <Routes>

      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/create-profile' element={<CreateProfile />} />
      <Route path='/' element={<Homepage />} />
      <Route path='/services' element={<Service />} />
      <Route path='/locations' element={<Location />} />
      <Route path='/booking' element={<Form />} />
      
      <Route path='/user' element={<UserDashboard />} />



        
      </Routes>
    </Router>
  )
}

export default App
