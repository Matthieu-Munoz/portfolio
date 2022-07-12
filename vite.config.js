import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactSvgPlugin from "vite-plugin-react-svg";
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
  plugins: [react(), reactSvgPlugin()],
});
