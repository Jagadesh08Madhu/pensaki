import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import ContactBar from '../shared/ContactBar'

export default function Main() {
  return (
    <main>
        <ContactBar/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </main>
  )
}
