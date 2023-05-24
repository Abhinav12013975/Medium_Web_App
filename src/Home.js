import React from 'react'
import Carousel from './components/Carousel'
import Data from './components/Data'
import TopStories from './components/TopStories'
import Footer from './Footer/Footer'
import './Home.css'
export default function Home() {
  return (
    <div className="home_main">
        <Carousel/>
        <Data/>
        <TopStories/>
        <Footer/>
    </div>
  )
}
