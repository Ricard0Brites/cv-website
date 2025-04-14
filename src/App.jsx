import { useState } from 'react'
import './App.css'

import Header from './Components/Header/HeaderComponent'
import About from './Components/AboutSection/AboutComponent'

export default function App() {
  return (
    <div>
        <header className="fixed top-0 left-0 w-full z-50">
          <Header></Header>
        </header>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col">
        <section className=''>
          <About></About>
        </section>
        <section >
          
        </section>
      </div>
    </div>
  )
}