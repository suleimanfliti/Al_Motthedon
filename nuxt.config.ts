// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  // modules: ["@nuxt/image"],
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/main.css"],
  // alias: {
  //   "@": resolve(__dirname, "/"),
  // },

  // image: {
  //   domains: ["nuxtjs.org"],
  // },
});
