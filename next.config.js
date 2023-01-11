/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/lahome.html",
        destination: "/la",
        permanent: true,
      },
      {
        source: "/laevents.html",
        destination: "/la/events",
        permanent: true,
      },
      {
        source: "/nyhome.html",
        destination: "/ny",
        permanent: true,
      },
      {
        source: "/nycontact.html",
        destination: "/ny/contact",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
