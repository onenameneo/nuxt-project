<template>
  <NuxtLayout />
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all .4s ease-in-out;
  }
  .page-enter-from,
  .page-leave-to {
    transform: translateX(60px);
    opacity: 0;
  }
</style>