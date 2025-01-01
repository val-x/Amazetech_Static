// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import NotFoundPage from "./components/NotFoundPage";
import GoToTopButton from "./components/GoToTopButton ";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/GalleryPage";
import Services from "./pages/Service";
import Products from "./pages/Products";
import ProductPage from "./components/products/ProductPage";

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
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Updated Product Routes */}
        <Route path="/product" element={<Products />} />
        <Route path="/products/:productId" element={<ProductPage />} />
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
