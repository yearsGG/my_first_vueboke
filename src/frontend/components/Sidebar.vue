<!--Sidebar.vue-->
<template>
  <aside class="sidebar">
    <ul>
      <li class="menu-item">
        <router-link to="/" exact>
          <i class="icon icon-home"></i>首页
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/docs">
          <i class="icon icon-docs"></i>使用文档
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/shop">
          <i class="icon icon-shop"></i>购买商店
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/orders">
          <i class="icon icon-orders"></i>我的订单
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/friends">
          <i class="icon icon-friends"></i>我的好友
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/profile">
          <i class="icon icon-profile"></i>个人中心
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  width: 220px;
  background-color: #ffffff;
  height: 100vh;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;
  padding-left: 10px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%; /* 使导航项充满侧边栏宽度 */
}

.menu-item {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

.menu-item a {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.menu-item a:hover {
  background-color: #f1f1f1;
}

.menu-item .router-link-active {
  background-color: #e0e7ff;
  color: #0056b3;
  font-weight: bold;
}

/* 图标样式 */
.icon {
  font-size: 18px;
  margin-right: 10px;
}

/* 示例图标类（替换为实际图标库的类或 SVG） */
.icon-home::before { content: '🏠'; } /* 替代图标 */
.icon-docs::before { content: '📄'; }
.icon-shop::before { content: '🛒'; }
.icon-orders::before { content: '📦'; }
.icon-friends::before { content: '👥'; }
.icon-profile::before { content: '👤'; }
</style>
