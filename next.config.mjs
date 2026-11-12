const nextConfig = {
  async redirects() {
    return [
      { source: "/services/3d-modeling-design", destination: "/services/3d-design-engineering", permanent: true },
      { source: "/services/prototyping", destination: "/services", permanent: true },
      { source: "/services/personalized-gifts", destination: "/services", permanent: true },
      { source: "/services/architectural-models", destination: "/services", permanent: true },
    ];
  },
};
export default nextConfig;
