// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFoundPage from './components/NotFoundPage';
import TermsAndConditions from './pages/Terms&Conditions';
import Privacy from './pages/Privacy';
import ScrollToTop from './components/ScrollToTop';


const App = () => (
  <Router>
    {/* <Header /> */}
    <main className="">
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<Privacy />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </main>
  </Router>
);

export default App;
