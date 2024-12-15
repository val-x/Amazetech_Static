import React from "react";

const WhatsAppButton = ({ phoneNumber, message, label }) => {
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="relative group">
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center transition duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path d="M20.52 3.48A11.86 11.86 0 002.25 20.09l-1.12 4.05a.75.75 0 00.92.92l4.05-1.12a11.86 11.86 0 0017.24-14.26zm-9.6 16.32a10.26 10.26 0 110-20.52 10.26 10.26 0 010 20.52zm5.8-6.72l-.66-.22c-.8-.27-1.07-.67-1.87-1.45-.5-.5-.64-.72-1.45-1.87l-.22-.66a.68.68 0 00-.67-.46c-.1 0-.26.03-.44.05-.68.1-1.6.56-2.3 1.28a5.42 5.42 0 00-1.13 1.62 4.48 4.48 0 00-.35 2.19c.05.72.4 1.36.9 1.92.42.42.93.77 1.46 1.03l.36.15c.53.21 1.08.29 1.63.31 1.3.03 2.55-.27 3.62-.85a5.39 5.39 0 001.62-1.13c.72-.7 1.18-1.62 1.28-2.3.02-.18.04-.34.04-.44 0-.3-.17-.48-.47-.66z" />
        </svg>
        {label || "Chat with Us"}
      </a>
      <span className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-sm p-2 rounded">
        Chat with us on WhatsApp
      </span>
    </div>
  );
};

export default WhatsAppButton;
