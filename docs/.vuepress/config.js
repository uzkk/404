module.exports = (context) => ({
  base: '/404/',

  title: '二色幽紫蝶',

  description: '东方 Project - 从入坑到入坟',

  theme: 'uzkk',

  plugins: [
    [require('@uzkk/shared-assets')],
    [require('../..')],
  ],

  ready () {
    const home = context.pages.find(({ path }) => path === '/')
    home.frontmatter.layout = 'NotFound'
    home.frontmatter.title = '404 Not Found'
  },

  themeConfig: {
    search: false,
  },

  evergreen: () => !context.isProd,
})
