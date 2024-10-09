import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Location from './pages/locations'
import Header from './base-components/header'
function App() {
  return (
    <>
      <Header />
      <Location />
    </>
  )
}

export default App
