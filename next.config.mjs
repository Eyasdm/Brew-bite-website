const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ilctucufscggrvgbjwue.supabase.co",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
};

export default nextConfig;
