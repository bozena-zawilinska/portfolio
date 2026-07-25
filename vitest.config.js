const path = require('path')
const vue = require('@vitejs/plugin-vue')

module.exports = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
}
