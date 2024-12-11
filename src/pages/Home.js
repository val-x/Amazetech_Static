import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Industries from '../components/Industries'
import Products from '../components/Products'
import Plants from '../components/Plants'
import Partner from '../components/Partner'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <Industries />
            <Products />
            <Plants />
            {/* <Partner /> */}
            <Footer />
        </main>
    )
}
