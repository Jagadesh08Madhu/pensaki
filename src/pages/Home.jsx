import React from 'react'
import Banner from '../components/Banner'
import Marquee from '../components/Marquee'
import FeatureContent from '../components/FeatureContent'
import AboutFeature from '../components/AboutFeature'

export default function Home() {
  return (
    <div>
      <Banner/>
      <AboutFeature/>
      <FeatureContent/>
      <Marquee/>
    </div>
  )
}
