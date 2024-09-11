import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          colors: {
            primary: '#B5A8A0',
          },
        },
        dark: {
          colors: {
            primary: '#555555',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})