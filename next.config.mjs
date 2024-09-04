/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/content',
          permanent: false, // Cambia esto a true si quieres una redirección permanente (301)
        },
      ];
    },
  };
  
  export default nextConfig;
  