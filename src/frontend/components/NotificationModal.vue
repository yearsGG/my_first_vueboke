<!-- src/components/NotificationModal.vue -->
<template>
  <div class="notification-modal-overlay" @click.self="closeModal">
    <div class="notification-modal-content">
      <h3>通知</h3>
      <p v-if="notifications.length === 0">暂无新通知！</p>
      <ul v-else>
        <li v-for="(notification, index) in notifications" :key="index">
          <strong>{{ notification.title }}</strong>
          <p>{{ notification.message }}</p>
          <span class="timestamp">{{ notification.timestamp }}</span>
        </li>
      </ul>
      <button @click="closeModal">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationModal",
  props: {
    notifications: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.notification-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.notification-modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 80%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.notification-modal-content h3 {
  margin-top: 0;
}

.notification-modal-content ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.notification-modal-content li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.notification-modal-content li:last-child {
  border-bottom: none;
}

.notification-modal-content .timestamp {
  font-size: 12px;
  color: #888;
}

.notification-modal-content button {
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.notification-modal-content button:hover {
  background-color: #0056b3;
}
</style>
