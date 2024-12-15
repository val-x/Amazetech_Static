import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConTop from "../components/contact/ConTop";
import ContactForm from "../components/contact/ContactForm";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact() {
  return (
    <main className="min-h-screen px-5 md:px-0">
      <Header />
      <WhatsAppButton
        phoneNumber="919946303595"
        message="Hello, I would like to inquire about your water treatment
         solutions and services. Can you provide more details?"
        label="Chat with Us"
      />
      <ConTop />
      <ContactForm />
      <Footer />
    </main>
  );
}
