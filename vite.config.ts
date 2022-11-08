import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
      //添加快捷路径@
    // https://vitejs.dev/config/#resolve-alias
    // 配置ts
    resolve: {
      alias: {
        '@': join(__dirname, "src"),
      }
    },
})
