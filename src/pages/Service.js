import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SerTop from '../components/service/SerTop'
import SerContent from '../components/service/SerContent'

export default function Service () {
  return (
    <main className="min-h-screen">
            <Header />
            <SerTop/>
            <SerContent/>
            <Footer />
        </main>
  )
}
