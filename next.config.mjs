// next.config.js
// module.exports = {
//   images: {
//     domains: ["chat-app-backend-fwr0.onrender.com"],
//   },
// };
const nextConfig = {
  images: {
    domains: ["chat-app-backend-fwr0.onrender.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "chat-app-backend-fwr0.onrender.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
