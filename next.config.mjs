/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['encrypted-tbn0.gstatic.com', 'statics.olx.in','www.svgrepo.com','imgd.aeplcdn.com','apollo.olx.in','nextjs.org','stimg.cardekho.com','stimg.cardekho.com', // existing domain
      'www.hondacarindia.com','stimg.cardekho.com', // existing domain
      'www.hondacarindia.com', // previously added domain
      'www.v3cars.com','i.pinimg.com','newspaperads.ads2publish.com'], // Add all required hostnames here
      dangerouslyAllowSVG: true, // Enable SVG images
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Optional: Improve security for SVGs
    },
  };
  
  export default nextConfig;
  