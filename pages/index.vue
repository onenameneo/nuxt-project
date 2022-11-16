<template>
  Index
  <button class="btn" @click="loadMore">next</button>
  <!-- <nuxt-img src="/nuxt-icon.png" :placeholder="20" /> -->
</template>
<script setup>
  import { getPosts } from '@/api/posts'

  const pageNum = ref(1)
  
  const { data:posts } = await useLazyAsyncData('getPosts', () => getPosts({ pageNum: pageNum.value }))
  console.log('data', posts.value)
  const refresh = () => refreshNuxtData('getPosts')
  const loadMore = async () => {
    pageNum.value++
    const res = await refresh()
  }

</script>