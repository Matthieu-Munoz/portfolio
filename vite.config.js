import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      Actions: path.resolve(__dirname, "./src/actions"),
      Reducers: path.resolve(__dirname, "./src/reducers"),
      Middlewares: path.resolve(__dirname, "./src/middlewares"),
      Assets: path.resolve(__dirname, "./src/assets"),
      Data: path.resolve(__dirname, "./src/data"),
      Components: path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: false,
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Matthieu Munoz",
        short_name: "Matthieu Munoz",
        description:
          "Portfolio of the junior Dev Matthieu Munoz - Presenting skills and projects",
        theme_color: "#fef0e7",
        background_color: "#fef0e7",
        display: "standalone",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "safari-pinned-tab.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
