import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

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
];

const hostname = "https://www.amazetechglobal.com";
const sitemapFilePath = "./public/sitemap.xml";

(async () => {
  const stream = new SitemapStream({ hostname });

  for (const link of links) {
    stream.write(link);
  }
  stream.end();

  const sitemapBuffer = await streamToPromise(stream);
  fs.writeFileSync(sitemapFilePath, sitemapBuffer.toString("utf-8"));

  console.log(`Sitemap with images successfully generated at ${sitemapFilePath}`);
})();
