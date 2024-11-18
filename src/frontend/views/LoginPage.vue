<template>
  <div :style="{ backgroundImage: `url(${backgroundImage})` }" class="dynamic-background">
  </div>
  <div class="login-container">
    <div class="login-card">
      <h2>魔戒</h2>
      <p class="register-link">还没有账户吗？<router-link to="/register">在此注册</router-link></p>
      <div class="form-group">
        <label for="username">用户名</label>
        <input v-model="username" id="username" type="text" placeholder="输入您的用户名" />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input v-model="password" id="password" type="password" placeholder="输入您的密码" />
      </div>
      <div class="form-group options">
        <div class="remember-me">
          <input type="checkbox" v-model="rememberMe" id="rememberMe" />
          <label for="rememberMe">自动登录</label>
        </div>
        <a href="#" class="forgot-password">忘记密码?</a>
      </div>
      <button :disabled="isLoading" @click="login" class="login-button">
        {{ isLoading ? '登录中...' : '登录' }}
      </button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_BASE_URL } from '../config/api';

export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      isLoading: false,
      errorMessage: '',
      backgroundImage: '@/assets/img.png' // 默认背景图像
    };
  },
  methods: {
    async login() {
      this.isLoading = true;
      this.errorMessage = '';
      try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
          username: this.username,
          password: this.password,
          rememberMe: this.rememberMe
        });
        // 登录成功后更新状态
        this.$store.dispatch('login', { username: this.username });
        this.$router.push('/');
      } catch (error) {
        this.errorMessage = error.response?.data || "登录失败";
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  background-color: #f0f2f5;
}

.dynamic-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/img.png'); /* Vue 3 和 Vite 项目中使用 "~" 来指示根目录 */
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  z-index: -1;
}

.login-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  z-index: 1;
}

h2 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.register-link {
  margin-bottom: 20px;
  font-size: 0.9rem;
  color: #555;
}

.register-link a {
  color: #007bff;
  text-decoration: none;
}

.form-group {
  position: relative;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
}

.remember-me {
  display: flex;
  align-items: center;
}

.forgot-password {
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: none;
}

.login-button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:disabled {
  background-color: #a0c4ff;
  cursor: not-allowed;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  background-color: rgba(240, 242, 245, 0.8); /* 让背景图片稍微透明 */
}
.error {
  color: red;
  margin-top: 10px;
  font-weight: bold;
}
</style>
