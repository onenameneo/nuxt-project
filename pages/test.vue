<template>
  <div class="mx-auto max-w-700px min-h-[800px] border-2px border-light-600">
    <Editor ref="editor" :preData="preData" />
  </div>
  <!-- <button class="btn" @click="getData">Button</button> -->
  <!-- <button class="btn" @click="getUser"> user</button> -->
  <button class="btn" @click="fetchPost">fetchPost</button>
  <button class="btn" @click="save">Save</button>
</template>
<script setup >
  import { getPost, updatePost } from '@/api/posts'

  definePageMeta({
    middleware: 'auth-require'
  })

  const editor = ref(null)
  // const { findOne, update } = useStrapi()
  const preData = ref(null)

  // const getData = async () => {
  //   const res = await findOne('posts', 1)
  //   console.log('data', res, res.data.attributes.content)
  //   preData.value = JSON.parse(res.data.attributes.content)
  // }
  // const getUser = () => {
  //   const user = useStrapiUser()
  //   const user = useUser()
  //   console.log('user', user.value)
  // }

  // const save = async () => {
  //   const data = await editor.value.getData()
  //   update('posts', 1, { 
  //     content: JSON.stringify(data)
  //    })
  // }
  
  const save = async () => {
    const data = await editor.value.getData()
    const res = await updatePost(1, {
      data: { content: JSON.stringify(data) }
    })
  }

  const fetchPost = async () => {
    const { data } = await getPost(1)
    console.log(data)
    preData.value = JSON.parse(data.attributes.content)
  }
  // getPost()

</script>