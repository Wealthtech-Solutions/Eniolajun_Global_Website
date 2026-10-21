import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const ssrDir = path.resolve(rootDir, "dist-ssr");

const SITE_URL = "https://www.eniolajunglobalservices.com";

const routes = [
  {
    path: "/",
    title:
      "Eniolajun Global Integrated Services Ltd (RC 1441429) | Real Estate & Facility Management",
    description:
      "Eniolajun Global Integrated Services Ltd (CAC Registration No: RC 1441429) provides premier estate management, property valuation, facility administration, and building maintenance across Port Harcourt, Lagos, Abuja, and Nigeria.",
  },
  {
    path: "/about",
    title:
      "About Us | Eniolajun Global Integrated Services Ltd (RC 1441429) — Estate & Facility Managers",
    description:
      "Learn about Eniolajun Global Integrated Services Ltd (CAC Registration No: RC 1441429), a premier Nigerian real estate and total facility management firm headquartered in Woji, Port Harcourt with nationwide operations.",
  },
  {
    path: "/services",
    title:
      "Our 10 Core Services | Eniolajun Global Integrated Services Ltd (RC 1441429)",
    description:
      "Explore our 10 core disciplines: Estate Management, Property Administration, Property Sales, Valuation & Consultancy, Facility Management, Building Maintenance, Landscaping, Refurbishment, Installations, and Utilities Operations.",
  },
  {
    path: "/projects",
    title:
      "Projects & Portfolio | Eniolajun Global Integrated Services Ltd (RC 1441429)",
    description:
      "View our proven track record managing residential estates, commercial complexes, property refurbishments, and valuations across Port Harcourt and Lagos.",
  },
  {
    path: "/contact",
    title:
      "Contact Us & Google Maps Location | Eniolajun Global Integrated Services Ltd (RC 1441429)",
    description:
      "Contact Eniolajun Global Integrated Services Ltd (RC 1441429) at +234 703 431 6633 or visit our head office at No. 12 Liberty Drive, Off Alcon Road, Woji, Port Harcourt.",
  },
  {
    path: "/privacy-policy",
    title:
      "Privacy Policy | Eniolajun Global Integrated Services Ltd (RC 1441429)",
    description:
      "Privacy Policy and Nigeria Data Protection Act (NDPA) compliance practices of Eniolajun Global Integrated Services Ltd (RC 1441429).",
  },
  {
    path: "/terms-of-use",
    title:
      "Terms of Use | Eniolajun Global Integrated Services Ltd (RC 1441429)",
    description:
      "Legal terms and operating conditions governing service proposals, site inspections, and use of the Eniolajun Global Integrated Services Ltd (RC 1441429) website.",
  },
];

async function prerender() {
  const templatePath = path.resolve(distDir, "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  const serverEntryPath = path.resolve(ssrDir, "entry-server.js");
  const { render } = await import(pathToFileURL(serverEntryPath).href);

  for (const route of routes) {
    const appHtml = render(route.path);
    const canonicalUrl =
      route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;

    let html = template
      .replace("<!--app-html-->", appHtml)
      .replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`)
      .replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${route.description}" />`
      )
      .replace(
        /<link rel="canonical" href=".*?" \/>/,
        `<link rel="canonical" href="${canonicalUrl}" />`
      )
      .replace(
        /<meta property="og:title" content=".*?" \/>/,
        `<meta property="og:title" content="${route.title}" />`
      )
      .replace(
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${route.description}" />`
      )
      .replace(
        /<meta property="og:url" content=".*?" \/>/,
        `<meta property="og:url" content="${canonicalUrl}" />`
      )
      .replace(
        /<meta name="twitter:title" content=".*?" \/>/,
        `<meta name="twitter:title" content="${route.title}" />`
      )
      .replace(
        /<meta name="twitter:description" content=".*?" \/>/,
        `<meta name="twitter:description" content="${route.description}" />`
      );

    if (route.path === "/") {
      fs.writeFileSync(path.resolve(distDir, "index.html"), html, "utf-8");
      console.log(`Pre-rendered: / -> dist/index.html`);
    } else {
      const cleanRoute = route.path.replace(/^\//, "");
      const routeDir = path.resolve(distDir, cleanRoute);
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(path.resolve(routeDir, "index.html"), html, "utf-8");
      fs.writeFileSync(path.resolve(distDir, `${cleanRoute}.html`), html, "utf-8");
      console.log(
        `Pre-rendered: ${route.path} -> dist/${cleanRoute}/index.html`
      );
    }
  }

  // Clean up temporary SSR build folder
  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log("Static pre-rendering complete!");
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
