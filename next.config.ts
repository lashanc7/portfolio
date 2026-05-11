/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // IMPORTANT: If your repository is named "my-portfolio" instead of "yourusername.github.io", 
  // you must uncomment the line below and replace 'my-portfolio' with your exact repo name.
  // basePath: '/my-portfolio', 
};

export default nextConfig;