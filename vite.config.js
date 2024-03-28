import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {},
  plugins: [react()],
  base: "https://r-o-s-e-b.github.io/rose.github.io",
});
