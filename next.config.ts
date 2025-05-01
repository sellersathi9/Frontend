import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ['m.media-amazon.com' , "www.github.com"],
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      
      {
        protocol :"https",
        hostname :"www.github.com"
      },
      {
        protocol :"https",
        hostname :"i.pravatar.cc"
        
      },
      {
        protocol :"https",
        hostname :"images.unsplash.com"
        
      }
    ]

  },
};

export default nextConfig;
