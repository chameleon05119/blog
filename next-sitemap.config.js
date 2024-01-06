/** @type {import("next-sitemap").IConfig} */
const config = {
  siteUrl: "https://blog-sigma-umber.vercel.app/",
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: { additionalSitemaps: ["https://xxx/server-sitemap.xml"] },
};

module.exports = config;
