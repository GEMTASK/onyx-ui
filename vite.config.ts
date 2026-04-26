import { resolve } from "path";
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { esmExternalRequirePlugin } from "rolldown/plugins";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "Onyx UI",
      fileName: "main"
    },
    rolldownOptions: {
      // external: [
      //   'react',
      //   'react-dom'
      // ]
      plugins: [
        esmExternalRequirePlugin({
          external: ["react", "react-dom", "lucide-react"]
        })
      ]
    }
  },
  css: {
    modules: {
      generateScopedName: "_onyx-ui_[local]_[hash:base64:5]"
    }
  },
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()]
    }),
    dts({
      tsconfigPath: "./tsconfig.app.json"
    })
  ]
});
