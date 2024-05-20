import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './customer/components/navigation/Navigation'
import MainCarousel from './customer/components/homeCarousel/MainCarousel'
import HomePage from './customer/pages/homePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <HomePage />
    </>
  )
}

export default App
