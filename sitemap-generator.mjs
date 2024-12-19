import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

const hostname = "https://www.amazetechglobal.com";
const sitemapFilePath = "./public/sitemap.xml";

const links = [
  {
    url: "/",
    changefreq: "daily",
    priority: 1.0,
    img: [
      {
        url: "https://www.amazetechglobal.com/images/home-banner.jpg",
        title: "Home Page Banner",
        caption: "Innovative Water Treatment Solutions",
      },
    ],
  },
  {
    url: "/about",
    changefreq: "weekly",
    priority: 0.8,
    img: [
      {
        url: "https://www.amazetechglobal.com/images/about-us.jpg",
        title: "About Us Banner",
        caption: "Learn more about Amazetech Corporation",
      },
    ],
  },
  {
    url: "/TermsAndConditions",
    changefreq: "yearly",
    priority: 0.5,
  },
  {
    url: "/PrivacyPolicy",
    changefreq: "yearly",
    priority: 0.5,
  },
  {
    url: "/product",
    changefreq: "weekly",
    priority: 0.8,
    img: [
      {
        url: "https://www.amazetechglobal.com/images/products-banner.jpg",
        title: "Product Page Banner",
        caption: "Explore our products for water treatment solutions",
      },
    ],
  },
  {
    url: "/products/ETP",
    changefreq: "monthly",
    priority: 0.7,
    img: [
      {
        url: "https://www.amazetechglobal.com/images/etp-product.jpg",
        title: "ETP Product",
        caption: "Effluent Treatment Plant Solutions",
      },
    ],
  },
  {
    url: "/products/STP",
    changefreq: "monthly",
    priority: 0.7,
    img: [
      {
        url: "https://www.amazetechglobal.com/images/stp-product.jpg",
        title: "STP Product",
        caption: "Sewage Treatment Plant Solutions",
      },
    ],
  },
  {
    url: "/products/oil",
    changefreq: "monthly",
    priority: 0.7,
    img: [
      {
        url: "https://www.amazetechglobal.com/images/oil-treatment.jpg",
        title: "Oil Treatment Solutions",
        caption: "High-performance oil treatment solutions",
      },
    ],
  },
  {
    url: "/service",
    changefreq: "weekly",
    priority: 0.8,
    img: [
      {
        url: "https://www.amazetechglobal.com/images/services-banner.jpg",
        title: "Service Page Banner",
        caption: "Discover our professional water treatment services",
      },
    ],
  },
  {
    url: "/gallery",
    changefreq: "monthly",
    priority: 0.6,
    img: [
      {
        url: "https://www.amazetechglobal.com/images/gallery-banner.jpg",
        title: "Gallery",
        caption: "Explore our projects and achievements",
      },
    ],
  },
  {
    url: "/contact",
    changefreq: "monthly",
    priority: 0.6,
  },
];

(async () => {
  const stream = new SitemapStream({ hostname });

  for (const link of links) {
    stream.write(link);
  }
  stream.end();

  const sitemapBuffer = await streamToPromise(stream);
  fs.writeFileSync(sitemapFilePath, sitemapBuffer.toString("utf-8"));

  console.log(`Sitemap successfully generated at ${sitemapFilePath}`);
})();
