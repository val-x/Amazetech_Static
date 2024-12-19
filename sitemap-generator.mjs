import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  // Add more routes here
];

const stream = new SitemapStream({ hostname: "https://www.amazetechglobal.com" });

(async () => {
  for (const link of links) {
    stream.write(link);
  }
  stream.end();

  const sitemap = await streamToPromise(stream);
  fs.writeFileSync("./public/sitemap.xml", sitemap);
})();
