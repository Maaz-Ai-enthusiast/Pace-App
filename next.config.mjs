// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['assets.aceternity.com', "assets.backblazeb2.com", "salad-storage.s3.us-east-005.backblazeb2.com"], 
    },
  }
  
  export default nextConfig;
  