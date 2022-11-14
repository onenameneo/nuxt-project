<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="text-xl normal-case btn btn-ghost">daisyUI</a>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
  </div>
  
  <div class="mx-auto max-w-700px min-h-800px border-2px border-light-600">
    <Editor ref="editor" :preData="preData" />
  </div>
  <button class="btn" @click="getData">Button</button>
  <button class="btn" @click="getUser"> user</button>
  <button class="btn" @click="save">Save</button>
  <button class="btn" @click="getPost">getPost</button>
</template>
<script setup >
  import Editor from '@/components/Editor'

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
    const user = useStrapiUser()
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