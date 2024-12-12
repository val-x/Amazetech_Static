import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Water from "../assest/water.jpg";
import { Helmet } from "react-helmet";


export default function Hero() {
  return (
    <header className="relative h-screen">
      <Helmet>
        <title>Amazetech Corporation | Sustainable Water Treatment</title>
        <meta
          name="description"
          content="Discover Amazetech Corporation's commitment to conserving the planet's most precious resources through innovative water treatment solutions."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Amazetech Corporation",
              "url": "https://amazetechglobal.com",
              "description": "Amazetech Corporation specializes in innovative water treatment solutions to conserve the planet's resources.",
              "logo": "https://amazetechglobal.com/logo.png",
              "sameAs": ["https://www.linkedin.com/company/amazetech", "https://twitter.com/amazetech"]
            }
          `}
        </script>
      </Helmet>
      <div className="absolute inset-0">
        <img
          src={Water}
          alt="Industrial water treatment facility by Amazetech Corporation "
          className="w-full h-full object-cover"
           loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
            Conserving the Planet's Most Precious Resources with Innovative
            Water Treatment
          </h1>

          <div className="">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#7BA615]  transition-colors"
              aria-label="Get started with Amazetech Corporation"
              title="Learn more about Amazetech Corporation's water treatment solutions"
            >
              Learn More About Us
              <div className="h-12 w-12 bg-[#90C418] drop-shadow-md flex items-center ml-7 justify-center rounded-full">
                {" "}
                <ArrowRight className="h-6 w-6" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
