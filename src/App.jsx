import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/HeaderComponent'
import About from './Components/AboutSection/AboutComponent'
import ImageCard from './Components/ImageCard/ImageCardComponent'

import HobbiesImage from './assets/Garage.avif'
import WorkExperienceImage from './assets/PersonGaming3.avif'
import EducationImage from './assets/Auditorium.avif'
import ShowcaseImage from './assets/macbook2.avif'

import AboutMePage from './Pages/AboutMe'
import EducationPage from './Pages/Education'
import PersonalInformationPage from './Pages/PersonalInformation'
import ProfessionalExperiencePage from './Pages/ProfessionalExperience'
import ShowcasePage from './Pages/Showcase'

import './index.css'

export default class App extends Component {
  
  GetRoutings()
  {
    return (
      <Routes>
        <Route path="/" element={this.GetFrontEnd()}/>
        <Route path="/About" element={<AboutMePage/>}/>
        <Route path="/PersonalInformation" element={<PersonalInformationPage/>}/>
        <Route path="/Education" element={<EducationPage/>}/>
        <Route path="/ProfessionalExperience" element={<ProfessionalExperiencePage/>}/>
        <Route path="/Showcase" element={<ShowcasePage/>}/>
      </Routes>
    );
  }

  GetFrontEnd()
  {
    return (
      <div className="snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen">
        <div className="flex flex-col h-screen w-screen snap-start">
          <Header />
          <About />
        </div>

        <section className="snap-start h-screen w-screen">
          <div className="flex flex-row overflow-x-clip overflow-y-clip h-full w-full">
            <ImageCard imageSrc={WorkExperienceImage} title="Professional Experience" Link="/ProfessionalExperience" />
            <ImageCard imageSrc={EducationImage} title="Education" Link="/Education" />
            <ImageCard imageSrc={ShowcaseImage} title="Showcase" Link="/Showcase" />
            <ImageCard imageSrc={HobbiesImage} title="Personal & Hobbies" Link="/PersonalInformation" />
          </div>
        </section>
      </div>
  );}

  render() {
    return(
          <Router>
            {this.GetRoutings()}
          </Router>
    ); 
  }
}