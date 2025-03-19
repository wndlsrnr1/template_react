import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    https: true,
    // host: '127.0.0.1',
    // port: '5173',
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true, // 요청 출처를 백엔드 도메인으로 변경
        secure: false, // HTTPS 검증 비활성화 (로컬 백엔드가 HTTP인 경우)
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
});
