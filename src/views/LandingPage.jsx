import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Courses from '../components/Courses'
import HowItWorks from '../components/HowItWorks'
import Certificates from '../components/Certificates'
import Stats from '../components/Stats'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <HowItWorks />
      <Certificates />
      <Stats />
      <Footer />
    </div>
  )
}