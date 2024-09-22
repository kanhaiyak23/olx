/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['encrypted-tbn0.gstatic.com', 'statics.olx.in','www.svgrepo.com','imgd.aeplcdn.com','apollo.olx.in','nextjs.org','stimg.cardekho.com','stimg.cardekho.com', // existing domain
      'www.hondacarindia.com','stimg.cardekho.com', // existing domain
      'www.hondacarindia.com', // previously added domain
      'www.v3cars.com','i.pinimg.com','newspaperads.ads2publish.com','cdni.autocarindia.com', 'stimg.cardekho.com', 'www.hondacarindia.com', 'www.v3cars.com', 'www.hyundai.com','www.hyundai.com', 'mediapool.bmwgroup.com','www.bikes4sale.in',
       'www.guptasen.com','upload.wikimedia.org',
      'www.mahindrabulk.com',
      'www.isuzupickups.com.au',
      'www.ashokleyland.com',
      'mahindra.com',
      'www.forcetrucks.com','www.motorindiaonline.in',"exstatic-in.vivo.com",'5.imimg.com',"truckcdn.cardekho.com","techgiants.pk","assets.tractorjunction.com","mir-s3-cdn-cf.behance.net","media.zigcdn.com","www.isuzu.co.uk","sabooautozone.com","images.jdmagicbox.com","www.motorbeam.com","imgd-ct.aeplcdn.com","gaadiwaadi.com","img.indianautosblog.com","www.apple.com" ,"m.media-amazon.com","www.reliancedigital.in","www.whatmobile.com.pk","i01.appmifile.com","rukminim2.flixcart.com"],
      // Add all required hostnames here
      dangerouslyAllowSVG: true, // Enable SVG images
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Optional: Improve security for SVGs
    },
  };
  
  export default nextConfig;
  