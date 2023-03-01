import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"
import DefineOption from "unplugin-vue-define-options/vite"

export default defineConfig({
  build: {
    outDir: "abc",

    minify: false,

    rollupOptions: {
      external: ["vue"],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: "named",
          dir: "../dz-ui/es"
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          exports: "named",
          dir: "../dz-ui/lib"
        }
      ]
    },

    lib: {
      entry: "./index.ts"
      // name: "dz-ui-cpns",
      // fileName: "dz-ui-cpns",
      // formats: ["cjs", "es", "umd"]
    }
  },

  plugins: [
    vue(),
    dts({
      entryRoot: "src",
      outputDir: ["../dz-ui/es/src", "../dz-ui/lib/src"],
      tsConfigFilePath: "../../tsconfig.json"
    }),
    DefineOption()
  ]
})
