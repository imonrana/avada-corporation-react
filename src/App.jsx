import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import AllServices from './Components/AllServices/AllServices'
import Goals from './Components/Goals/Goals'
import PricingCard from './Components/PricingCard/PricingCard'


function App() {


  return (
    <>
    <Navbar/>
    <Banner/>
    <AllServices/>
    <Goals/>
   <PricingCard/>
    </>
  )
}

export default App
