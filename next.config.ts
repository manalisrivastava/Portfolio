import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/work/shasymitra-ai",
        destination: "/work/shasymitra",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
