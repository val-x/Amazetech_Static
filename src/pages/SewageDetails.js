import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sewage from '../components/products/mainproducts/Sewage'
import SewTop from '../components/products/mainproducts/SewTop'

export default function ProductDetails() {
  return (
    <main className="min-h-screen">
            <Header />
            <SewTop/>
            <Sewage/>
            <Footer />
        </main>
  )
}
