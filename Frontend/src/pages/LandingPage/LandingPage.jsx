import React from 'react'
import Navbar from '../../components/Landing Page/Navbar'
import LandingBody from '../../components/Landing Page/Carousel'
import Cards from '../../components/Landing Page/Cards'
import Card2 from '../../components/Landing Page/Card2'
import Fotter from '../../components/Landing Page/Fotter'
import KartaJa from '../../components/Landing Page/KartaJa'
import YourMoney from '../../components/Landing Page/YourMoney'

function LandingPage() {
  return (
    <div className=' overflow-x-auto' >
      <Navbar />
      <LandingBody />
      <Cards />
      <Card2 />
      <KartaJa />
      <YourMoney />
      <Fotter />
    </div>
  )
}

export default LandingPage