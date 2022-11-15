<template>
  <div class="mx-auto max-w-700px min-h-[800px] border-2px border-light-600">
    <Editor ref="editor" :preData="preData" />
  </div>
  <button class="btn" @click="getData">Button</button>
  <button class="btn" @click="getUser"> user</button>
  <button class="btn" @click="save">Save</button>
  <button class="btn" @click="getPost">getPost</button>
</template>
<script setup >
  // import Editor from '@/components/Editor'

  definePageMeta({
    middleware: 'index'
  })

  const editor = ref(null)
  const { findOne, update } = useStrapi()
  const preData = ref(null)

  const getData = async () => {
    const res = await findOne('posts', 1)
    console.log('data', res, res.data.attributes.content)
    preData.value = JSON.parse(res.data.attributes.content)
  }
  const getUser = () => {
    // const user = useStrapiUser()
    const user = useUser()
    console.log('user', user.value)
  }

  const save = async () => {
    const data = await editor.value.getData()
    console.log('data', data)
    update('posts', 1, { 
      content: JSON.stringify(data)
     })
  }
  
  const getPost = async () => {
    const { data } = await useAuthFetch('/api/posts/1', {
      transform: (res) => {
        return res.data
      },
      pick: ['attributes']
    })
    console.log('data', data.value)
  }
  getPost()

</script>