<template>
  <DefaultLayout />
</template>

<script>
import DefaultLayout from '@/frontend/layouts/DefaultLayout.vue';

export default {
  name: 'App',
  components: {
    DefaultLayout,
  },
};
</script>

<style>
@import '../assets/base.css';
@import '../assets/main.css';

/* 确保全局应用合理的字体大小 */
body, #app {
  font-size: 16px;
}
</style>
