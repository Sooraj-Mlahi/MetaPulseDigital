/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Configuration for GoDaddy deployment
  output: process.env.BUILD_EXPORT === 'true' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Ensure proper asset paths for GoDaddy hosting
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.BUILD_EXPORT === 'true' 
    ? process.env.NEXT_PUBLIC_SITE_URL || '' 
    : '',
};

export default nextConfig;
