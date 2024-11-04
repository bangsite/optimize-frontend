import type { NextConfig } from "next";
const nextConfig: NextConfig = {

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cloudflare-ipfs.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
