import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// Dev chạy ở "/"; khi build cho GitHub Pages dùng subpath "/studybuddy-hero/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/studybuddy-hero/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
