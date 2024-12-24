import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PaperTop from '../components/products/mainproducts/paper/PaperTop'
import PaperMain from '../components/products/mainproducts/paper/PaperMain'

export default function ProductDetails() {
  return (
    <main className="min-h-screen">
            <Header />
           <PaperTop/>
           <PaperMain/>
            <Footer />
        </main>
  )
}
