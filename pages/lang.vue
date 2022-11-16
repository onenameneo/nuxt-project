<template>
  <div>
    <h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
    <select class="select select-primary w-full max-w-xs" v-model="$i18n.locale">
      <option disabled selected>Select Language：</option>
      <option value="en">English</option>
      <option value="tc">繁體中文</option>
      <option value="zh">简体中文</option>
    </select>
  </div>
</template>
<script setup>

</script>
