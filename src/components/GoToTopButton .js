import React, { useState, useEffect } from 'react';

const GoToTopButton = () => {
  // State to track if the button should be visible
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event and toggle visibility
  const handleScroll = () => {
    if (window.scrollY > 200) { // Show button after scrolling 200px down
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener on mount and remove it on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  return (
    // Only render button if isVisible is true
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 bg-[#90C418] text-white rounded-full shadow-lg hover:bg-[#76a31d] transition duration-300"
        aria-label="Go to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7-7-7 7"
          />
        </svg>
      </button>
    )
  );
};

export default GoToTopButton;
