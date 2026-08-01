import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/app1/",
  plugins: [react()],
  build: {
    outDir: "../../dist/app1",
    emptyOutDir: true,
  },
});