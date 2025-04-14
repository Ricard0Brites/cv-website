import { useState } from 'react'
import './App.css'

import Header from './Components/Header/HeaderComponent'
import About from './Components/AboutSection/AboutComponent'

function App() {
  return (
    <div>
      <Header></Header>
      
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <section className="h-screen snap-start flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
          <About></About>
        </section>
      </div>
    </div>
  )
}

export default App
