<template>
  Index
  <button class="btn" @click="loadMore">next</button>
  <testIcon class="icon w-10 h-10 transition-all duration-300 cursor-pointer hover:w-20 hover:h-20"/>
  
  <div class="h-[3000px]"></div>
  <!-- <lazy-component @show="onShow">
    <img :src="testImage" >
  </lazy-component> -->
  <!-- <ClientOnly >
    <img v-lazy="testImage" />
  </ClientOnly > -->
  <!-- <image v-lazy="testImage" /> -->
</template>
<script setup>
  import { getPosts } from '@/api/posts'
  import testIcon from '~/assets/icons/test.svg'
  import testImage from '~/assets/images/test.png'

  const pageNum = ref(1)
  
  const { data:posts } = await useLazyAsyncData('getPosts', () => getPosts({ pageNum: pageNum.value }))
  console.log('data', posts.value)
  const refresh = () => refreshNuxtData('getPosts')
  const loadMore = async () => {
    pageNum.value++
    const res = await refresh()
  }
  const onShow = () => {
    console.log('lazy load test')
  }

</script>