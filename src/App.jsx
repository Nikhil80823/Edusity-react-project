import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/hero'
import Programs from './components/programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM'  title= 'What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery'  title= 'Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS'  title= 'What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us'  title= 'Get In Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState}setPlayState= {setPlayState}/>
    </>
  )
}

export default App