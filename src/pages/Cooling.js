import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CoolingTop from '../components/products/mainproducts/cooling/CoolingTop'
import CoolingMain from '../components/products/mainproducts/cooling/CoolingMain'

export default function Cooling() {
  return (
    <main className="min-h-screen">
            <Header />
            <CoolingTop/>
            <CoolingMain/>
            <Footer/>
        </main>
  )
}
