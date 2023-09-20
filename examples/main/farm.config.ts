import type { UserConfig } from "@farmfe/core";
import farmJsPluginVue from "@farmfe/js-plugin-vue";

function defineConfig(config: UserConfig) {
  return config;
}

export default defineConfig({
  plugins: [farmJsPluginVue()],
  server: {
    port: 9000,
    proxy: {
      "/react": {
        target: "http://localhost:9001",
        changeOrigin: true,
        rewrite: (path: any) => path.replace(/^\/react/, ""),
      },
    },
  },
});
