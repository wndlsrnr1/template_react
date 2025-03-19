import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";
import path from "path"; // Node.js의 path 모듈을 가져옴

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    https: false,
    // host: '127.0.0.1',
    // port: '5173',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // @를 /src 경로로 설정
    },
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
});
