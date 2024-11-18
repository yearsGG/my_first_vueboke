<!-- Navbar.vue -->
<template>
  <nav class="navbar">
    <div class="user-options">
      <span class="icon" @click="toggleNotificationModal">🔔</span>
      <span class="icon">🔄</span>

      <!-- 用户已登录时显示用户名和菜单 -->
      <div v-if="isLoggedIn" class="user-menu" @click.stop="toggleMenu">
        <span class="icon">👤</span> <span>{{ username }}</span>

        <!-- 下拉菜单 -->
        <div v-if="isMenuOpen" class="dropdown">
          <p>个人信息</p>
          <p>设置</p>
          <p @click="logoutUser">退出登录</p>
        </div>
      </div>

      <!-- 用户未登录时显示登录链接 -->
      <div v-else>
        <router-link to="/login">登录</router-link>
      </div>
    </div>

    <!-- 通知弹窗 -->
    <NotificationModal
        v-if="isNotificationModalOpen"
        :notifications="notifications"
        @close="toggleNotificationModal"
    />
  </nav>
</template>

<script>
import NotificationModal from "./NotificationModal.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Navbar",
  components: { NotificationModal },
  data() {
    return {
      isMenuOpen: false,
      isNotificationModalOpen: false,
      notifications: [
        { title: "新关注", message: "用户A关注了你", timestamp: "刚刚" },
        { title: "金币奖励", message: "您发表的博客获得了50金币奖励", timestamp: "2小时前" },
        { title: "新评论", message: "用户B评论了你的文章：‘很好！’", timestamp: "昨天" },
      ],
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'username']),
  },
  methods: {
    ...mapActions(['logout']),
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleNotificationModal() {
      this.isNotificationModalOpen = !this.isNotificationModalOpen;
    },
    async logoutUser() {
      await this.logout(); // 调用 Vuex action 清除登录状态
      this.$router.push('/login'); // 跳转到登录页面
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },
  mounted() {
    document.addEventListener("click", this.closeMenu);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeMenu);
  }
};
</script>


<style scoped>
.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
}

.user-options {
  display: flex;
  align-items: center;
}

.icon {
  margin-left: 15px;
  font-size: 18px;
  color: #555;
  cursor: pointer;
}

.icon:hover {
  color: #333;
}

.user-menu {
  position: relative;
  display: flex;
  align-items: center;
}

.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 120px;
  padding: 10px;
  border-radius: 4px;
  margin-top: 8px;
}

.dropdown p {
  margin: 0;
  padding: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
}

.dropdown p:hover {
  background-color: #f2f2f2;
}
</style>
