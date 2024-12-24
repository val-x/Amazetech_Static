// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route , useLocation } from "react-router-dom";

import Home from "./pages/Home";
import NotFoundPage from "./components/NotFoundPage";
import GoToTopButton from "./components/GoToTopButton ";
import TermsAndConditions from "./pages/Terms&Conditions";
import Privacy from "./pages/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/GalleryPage";
import Products from "./pages/ProductPage";
import Services from "./pages/Service";
import ProductDetails from "./pages/ProductDetails";
import SewageDetails from "./pages/SewageDetails";
import OilPage from "./pages/OilPage";
import Boiler from "./pages/Boiler";
import Cooling from "./pages/Cooling";
import Chiller from "./pages/Chiller";
import RO from "./pages/RO";
import Deformers from "./pages/Defoamers";
import Paper from "./pages/Paper";
import Mining from "./pages/Mining";

// const App = () => (
//   <Router>
//     {/* <Header /> */}
//     <main className="">
//       <ScrollToTop />
//       <GoToTopButton />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="*" element={<NotFoundPage />} />
//         <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
//         <Route path="/PrivacyPolicy" element={<Privacy />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/product" element={<Products />} />
//         <Route path="/products/ETP" element={<ProductDetails />} />
//         <Route path="/products/STP" element={<SewageDetails />} />
//         <Route path="/products/oil" element={<OilPage />} />
//         <Route path="/service" element={<Services />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </main>
//   </Router>
// );

// export default App;

// Wrapper component for App to use hooks like useLocation
const AppWithConditionalButton = () => {
  const location = useLocation();

  return (
    <main className="">
      <ScrollToTop />
      {/* Conditionally render GoToTopButton */}
      {location.pathname !== "/contact" && <GoToTopButton />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/PrivacyPolicy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/products/ETP" element={<ProductDetails />} />
        <Route path="/products/STP" element={<SewageDetails />} />
        <Route path="/products/oil" element={<OilPage />} />
        <Route path="/service" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/boiler" element={<Boiler />} />
        <Route path="/products/Cooling" element={<Cooling />} />
        <Route path="/products/Chiller" element={<Chiller />} />
        <Route path="/products/RO" element={<RO/>} />
        <Route path="/products/Defoamers" element={<Deformers/>} />
        <Route path="/products/Paper" element={<Paper/>} />
        <Route path="/products/Mining" element={<Mining/>} />
      </Routes>
    </main>
  );
};

const App = () => (
  <Router>
    <AppWithConditionalButton />
  </Router>
);

export default App;
