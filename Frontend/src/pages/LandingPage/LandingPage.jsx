import React from 'react'
import Navbar from '../../components/Landing Page/Navbar'
import LandingBody from '../../components/Landing Page/Carousel'
import Cards from '../../components/Landing Page/Cards'
import Card2 from '../../components/Landing Page/Card2'
import Fotter from '../../components/Landing Page/Fotter'
import KartaJa from '../../components/Landing Page/KartaJa'

function LandingPage() {
  return (
    <div className='  '>
      <Navbar />
      <LandingBody />
      <Cards />
      <Card2 />
      <KartaJa />
      <Fotter />
    </div>
  )
}

export default LandingPage