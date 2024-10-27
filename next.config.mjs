/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        POD_NAME: process.env.POD_NAME,
      },
};

export default nextConfig;
