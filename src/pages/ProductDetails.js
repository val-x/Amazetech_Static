import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Effluent from '../components/products/mainproducts/Effluent'
import EffTop from '../components/products/mainproducts/EffTop'

export default function ProductDetails() {
  return (
    <main className="min-h-screen">
            <Header />
            <EffTop/>
            <Effluent/>
            <Footer />
        </main>
  )
}
