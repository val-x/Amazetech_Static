import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ConTop from '../components/contact/ConTop'
import ContactForm from '../components/contact/ContactForm'

export default function Contact() {
  return (
    <main className="min-h-screen px-5 md:px-0">
            <Header />
            <ConTop/>  
            <ContactForm/>
            <Footer />
        </main>
  )
}
