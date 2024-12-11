import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Top from '../components/about/Top'
import Problem from '../components/about/Problem'
import Timeline from '../components/about/Timeline'
import Vision from '../components/about/Vision'
import Mission from '../components/about/Mission'

export default function About() {
  return (
    <main className="min-h-screen">
            <Header />
            <Top/>
            <Problem/>
            <Timeline/>
            <Vision/>
            <Mission/>
            <Footer />
        </main>
  )
}
