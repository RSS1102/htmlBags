import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.VITE_BASEURL,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': join(__dirname, "src"),
      },
    },
  };
});
