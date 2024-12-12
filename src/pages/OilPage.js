import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Oil from '../components/products/mainproducts/Oil'
import OilTop from '../components/products/mainproducts/OilTop'

export default function ProductDetails() {
  return (
    <main className="min-h-screen">
            <Header />
            <OilTop/>
            <Oil/>
            <Footer />
        </main>
  )
}
