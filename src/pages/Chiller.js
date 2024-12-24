import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChillerTop from '../components/products/mainproducts/chiller/ChillerTop'
import ChillerMain from '../components/products/mainproducts/chiller/ChillerMain'

export default function Chiller() {
  return (
    <main className="min-h-screen">
            <Header />
            <ChillerTop/>
            <ChillerMain/>
            <Footer />
        </main>
  )
}
