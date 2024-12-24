import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DeMain from '../components/products/mainproducts/defoamers/DeMain'
import DeTop from '../components/products/mainproducts/defoamers/DeTop'

export default function ProductDetails() {
  return (
    <main className="min-h-screen">
            <Header />
            <DeTop/>
            <DeMain/>
            <Footer />
        </main>
  )
}
