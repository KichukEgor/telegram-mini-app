import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import fs from "fs";

export default defineConfig({
  plugins: [react()],
  base: '/telegram-mini-app/',
  server: {
    port: 443,
    host: "0.0.0.0",
    hmr: {
      host: 'tg-mini-app.local',
      port: 443,
    },
    /*https: {
      key: fs.readFileSync('./.cert/localhost-key.pem'),
      cert: fs.readFileSync('./.cert/localhost.pem'),
    },*/
  },
})
