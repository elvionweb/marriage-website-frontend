import React from 'react'
import Hero from './components/Hero'
import StoryTimeline from './components/StoryTimeline'
import CoupleSection from './components/CoupleSection'
import WeddingDetails from './components/WeddingDetails'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import RSVPForm from './components/RSVPForm'
import LoveNotes from './components/LoveNotes'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Hero />
      <StoryTimeline />
      <CoupleSection />
      <WeddingDetails />
      <Countdown />
      <Gallery />
      <RSVPForm />
      <LoveNotes />
      <Footer />
    </div>
  )
}

export default App