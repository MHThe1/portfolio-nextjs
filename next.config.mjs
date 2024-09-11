/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true,
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '1337',
              pathname: '/uploads/**',
            },
          ],
     } 
};

export default nextConfig;
