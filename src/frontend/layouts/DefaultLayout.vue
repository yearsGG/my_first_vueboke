<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div class="default-layout">
    <Sidebar v-if="!$route.meta.hideNavbar" />
    <div class="main-content">
      <Navbar v-if="!$route.meta.hideNavbar" />
      <router-view /> <!-- 动态加载页面内容 -->
    </div>
  </div>
</template>

<script>
import Sidebar from '@/frontend/components/Sidebar.vue';
import Navbar from '@/frontend/components/Navbar.vue';

export default {
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style scoped>
.default-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  background-color: #f9f9f9;
}
</style>
