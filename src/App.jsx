import { useState } from 'react'
import './App.css'

import Header from './Components/Header/HeaderComponent'
import About from './Components/AboutSection/AboutComponent'
import ImageCard from './Components/ImageCard/ImageCardComponent'

import HobbiesImage from './assets/Garage.avif'
import WorkExperienceImage from './assets/PersonGaming3.avif'
import EducationImage from './assets/Auditorium.avif'
import ShowcaseImage from './assets/macbook2.avif'

export default function App() {
  return (
    <div>
        <header className="fixed top-0 left-0 w-full z-50">
          <Header></Header>
        </header>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col">
        <section className='snap-start'>
          <About></About>
        </section>
        <section>
          <div className='flex flex-col'>
            
            <div className='snap-start min-h-screen flex flex-row overflow-hidden field-sizing-fixed'>
              <ImageCard imageSrc={WorkExperienceImage} title='Professional Experience'></ImageCard>
              <ImageCard imageSrc={EducationImage} title='Education'></ImageCard>
              <ImageCard imageSrc={ShowcaseImage} title='Showcase'></ImageCard>
              <ImageCard imageSrc={HobbiesImage} title='Personal & Hobbies'></ImageCard>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}