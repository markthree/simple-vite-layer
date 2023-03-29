import Unocss from "unocss/vite";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    Unocss(),
    Components({
      dts: "./types/components.d.ts",
    }),
  ],
});
