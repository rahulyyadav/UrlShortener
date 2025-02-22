/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:id",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:id`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
