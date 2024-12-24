import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RO from '../components/products/mainproducts/ro/RO'
import RoMain from '../components/products/mainproducts/ro/RoMain'

export default function ProductDetails() {
  return (
    <main className="min-h-screen">
            <Header />
            <RO/>
            <RoMain/>
            <Footer />
        </main>
  )
}
