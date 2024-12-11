import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GalTop from '../components/gallery/GalTop'
import Gallery from '../components/gallery/Gallery'


export default function GalleryPage() {
  return (
    <main className="min-h-screen">
            <Header />
            <GalTop/>
            <Gallery/>
            <Footer />
        </main>
  )
}
