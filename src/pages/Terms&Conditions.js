import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TermsAndConditions from '../components/TermsAndConditions'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <TermsAndConditions />
            <Footer />
        </main>
    )
}
