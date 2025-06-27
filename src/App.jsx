import { useState } from 'react'
import { Navbar } from '@/sections/Navabar'
import { Hero } from '@/sections/Hero'


function App() {


  return (
    <>
    <div className="container mx-auto max-w-7xl">
          <Navbar />
          <Hero />
    </div>
    </>
  )
}

export default App
