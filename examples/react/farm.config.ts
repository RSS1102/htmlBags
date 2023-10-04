import type { UserConfig } from "@farmfe/core";
import path from "path";
import farmJsPluginReact from "@farmfe/plugin-react";
function defineConfig(config: UserConfig) {
  return config;
}

export default defineConfig({
  plugins: [farmJsPluginReact],
  server: {
    port: 9001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  compilation: {
    resolve: {
      alias: {
        "/@": path.join(process.cwd(), "src"),
      },
    },
  },
});
