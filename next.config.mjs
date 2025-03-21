// next.config.js;
// module.exports = {
//   images: {
//     domains: ["chat-app-backend-fwr0.onrender.com"],
//   },
// };
//---------------------
// const nextConfig = {
//   images: {
//     domains: ["chat-app-backend-fwr0.onrender.com"],

//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "chat-app-backend-fwr0.onrender.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "chat-app-new-backend.onrender.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8009",
        pathname: "/**",
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)\\.(png|jpg|webp|svg)",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=86400", // Cache for 1 day
  //         },
  //       ],
  //     },
  //   ];
  // },
}

export default nextConfig
