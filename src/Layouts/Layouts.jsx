import React from 'react'
import Navigation from '../Navigation/Navigation'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layouts() {
  return (
    <>
    <Navigation/>
    <main>
        <Outlet/>
    </main>
    <Footer />
    </>
  )
}

export default Layouts
