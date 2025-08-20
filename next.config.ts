import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["./styles"], // 添加 Sass 导入路径
    prependData: `@use "variables.scss" as *;`, // 在所有 SCSS 文件前自动导入，并暴露为全局变量
  },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
