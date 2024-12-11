import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProTop from '../components/products/ProTop'
import ProductCard from '../components/products/ProductCard'
import ProdBottom from '../components/products/ProdBottom'



export default function ProductPage() {
  return (
    <main className="min-h-screen">
            <Header />
            <ProTop/>
            <ProductCard/>
            <ProdBottom/>
            <Footer />
        </main>
  )
}