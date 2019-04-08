<template>
  <div class="main-div not-found">
    <h1>404</h1>
    <blockquote>{{ messages[id] }}</blockquote>
    <a v-if="$route.path === '/'" @click="updateId">刷新</a>
    <router-link v-else to="/">回到主页</router-link>
  </div>
</template>

<script>

import messages from './messages'

export default {
  data: () => ({
    id: 0,
  }),

  created () {
    this.messages = messages
    this.updateId()
  },

  methods: {
    updateId () {
      const lastId = this.id
      while (this.id === lastId) {
        this.id = Math.floor(Math.random() * messages.length)
      }
    },
  },
}

</script>

<style lang="stylus" scoped>

.not-found
  margin 2rem 0 1rem
  padding 3rem

  h1
    font-size 2.4rem

  blockquote
    padding 0 1em
    color #6a737d
    border-left 0.25em solid #dfe2e5
    margin 1em 0 2em

  a
    cursor pointer
    &:hover
      text-decoration underline

</style>
