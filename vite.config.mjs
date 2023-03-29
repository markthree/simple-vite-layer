import Unocss from "unocss/vite";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    Unocss(),
    AutoImport({
      dirs: ["./src/composables"],
      dts: "./types/auto-imports.d.ts",
      imports: ["pinia", "vue-router", "vue"],
    }),
    Components({
      dts: "./types/components.d.ts",
    }),
  ],
});
