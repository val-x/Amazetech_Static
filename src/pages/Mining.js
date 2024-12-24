import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MiningTop from '../components/products/mainproducts/mining/MiningTop'
import MiningMain from '../components/products/mainproducts/mining/MiningMain'

export default function ProductDetails() {
  return (
    <main className="min-h-screen">
            <Header />
            <MiningTop/>
            <MiningMain/>
            <Footer />
        </main>
  )
}
