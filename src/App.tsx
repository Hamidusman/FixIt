import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './base-components/header'
import Hero from './home-page/hero'
import Container from './home-page/container'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Container />

    </>
  )
}

export default App
