import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
  rollupOptions: {
  output:{
    manualChunks(id) {
      if (id.includes('node_modules')) {
        return id.toString().split('node_modules/')[1].split('/')[0].toString();
      }
    }
  }
  }
  },
  plugins: [react()],
  base: "/",
  server: {
    port: 3000,
  }
})