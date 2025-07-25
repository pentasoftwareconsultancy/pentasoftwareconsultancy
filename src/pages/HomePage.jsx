import React from 'react'
import Hero from '../component/home/hero/Hero'
import Card from '../component/home/card/Card'
import Solution from '../component/home/card/solution/Solution'
// import Gallery from '../component/home/card/gallery/Gallery'
// import Footer from '../component/about/footer/Footer'

function HomePage() {
  return (
    <div>
    <Hero/>
    <Card/>
    <Solution/>
    {/* <Gallery/> */}
    {/* <Footer/> */}
    </div>
  )
}

export default HomePage
