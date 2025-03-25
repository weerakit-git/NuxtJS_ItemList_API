// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  target: 'static', 
  app: {
    baseURL: '/',
    nitro: {
      preset: 'static'
    },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title:"Shopping",
      meta:[
        {name:"decription",content:"รายละเอียดเว็บไซต์"}
      ]
    }
  }
})


