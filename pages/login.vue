<template>
  <div class="container mx-auto max-w-[800px] h-[2000px]">
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered" v-model="identifier" :class="{ 'input-error': errorMessage }" />
              <span class="text-red-500">{{ errorMessage }}</span>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" class="input input-bordered" v-model="userState.password" />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary" @click="onSubmit">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { login } from '@/api/auth'
  import { useField } from 'vee-validate';
  import { string } from 'yup'

  const userState = reactive({
    identifier: '',
    password: ''
  })

  const { errorMessage, value:identifier, errors } = useField('identifier', string().required().email())

  const onSubmit = async () => {
    try {
      const res = await login({ identifier: userState.identifier, password: userState.password })
      navigateTo('/')
    } catch (error) {
      console.log('error', error)
    }
    
  }
</script>