const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Bozena Zawilinska | Front-End Engineer',
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/index.scss";
        `,
      },
    },
  },
})
