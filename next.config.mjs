/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['avatars.githubusercontent.com'],
      },
    experimental:{
        staleTimes:{
            dynamic:30,
        },
    },
    serverExternalPackages: ["@node-rs/argon2"],
};


export default nextConfig;
