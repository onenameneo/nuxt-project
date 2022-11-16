<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.4s ease-in-out;
  }
  .layout-enter-from,
  .layout-leave-to {
    transform: translateX(60px);
    opacity: 0;
  }
</style>