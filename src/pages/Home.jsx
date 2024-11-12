import React from 'react'
import Banner from '../components/Banner'
import Marquee from '../components/Marquee'
import FeatureContent from '../components/FeatureContent'
import AboutFeature from '../components/AboutFeature'
import TestimonialSlider from '../components/TestimonialSlider'

export default function Home() {
  return (
    <div>
      <Banner/>
      <AboutFeature/>
      <FeatureContent/>
      {/* <TestimonialSlider/> */}
      <Marquee/>
    </div>
  )
}
