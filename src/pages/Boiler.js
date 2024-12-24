import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BoilerMain from '../components/products/mainproducts/boiler/BoilerMain'
import BoilerTop from '../components/products/mainproducts/boiler/BoilerTop'

export default function Boiler() {
  return (
    <main className="min-h-screen">
            <Header />
            <BoilerTop/>
            <BoilerMain/>
            <Footer />
        </main>
  )
}
