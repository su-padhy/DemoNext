/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_POD_NAME: process.env.POD_NAME,
      },
};

export default nextConfig;
