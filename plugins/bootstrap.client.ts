import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("bs", bootstrap);
});
