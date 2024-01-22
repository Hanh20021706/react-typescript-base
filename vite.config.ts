import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { checker } from "vite-plugin-checker";
import dynamicImport from "vite-plugin-dynamic-import";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({ typescript: false }),
    react(),
    dynamicImport(),
    svgr(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@Component": path.resolve("./src/components"),
      "@Page": path.resolve("./src/page"),
    },
  },
});
