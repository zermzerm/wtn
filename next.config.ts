import type { NextConfig } from "next";

const nextConfig = {
  compiler: {
    styledComponents: true, // 내부적으로 babel plugin과 같은 역할
  },
};

export default nextConfig;
