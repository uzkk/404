const { resolve } = require('path')

module.exports = (options, context) => ({
  name: '@uzkk/404',

  ready () {
    context.themeAPI.layoutComponentMap.NotFound.path = resolve(__dirname, '404.vue')
  },
})
