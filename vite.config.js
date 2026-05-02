import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        learnMore: 'learn-more.html',
        addToCart: 'add-to-cart.html',
        contactUs: 'contact-us.html',
        browseCollection: 'browse-collection.html'
      }
    }
  }
})
