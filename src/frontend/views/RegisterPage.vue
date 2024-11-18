<template>
  <div class="register-container">
    <div class="register-card">
      <h2>创建您的账户</h2>
      <p class="login-link">已有账号？<router-link to="/login">在此登录</router-link></p>

      <div class="form-group">
        <label for="username">用户名</label>
        <input v-model="username" id="username" type="text" placeholder="请输入你的用户名" />
      </div>

      <div class="form-group">
        <label for="email">邮箱</label>
        <input v-model="email" id="email" type="email" placeholder="请输入你的邮箱" />
      </div>

      <div class="form-group">
        <label for="password">密码</label>
        <input v-model="password" id="password" type="password" placeholder="请输入你的密码" />
      </div>

      <div class="form-group">
        <label for="confirmPassword">确认密码</label>
        <input v-model="confirmPassword" id="confirmPassword" type="password" placeholder="请再次输入你的密码" />
      </div>

      <div class="form-group terms">
        <input type="checkbox" v-model="agreeTerms" id="agreeTerms" />
        <label for="agreeTerms">我同意 <a href="#" target="_blank">服务条款</a></label>
      </div>

      <button :disabled="isLoading" @click="register" class="register-button">
        {{ isLoading ? '注册中...' : '创建账户' }}
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
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
      isLoading: false,
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "两次输入的密码不一致";
        return;
      }
      if (!this.agreeTerms) {
        this.errorMessage = "请先同意服务条款";
        return;
      }

      this.isLoading = true;
      this.errorMessage = '';
      try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, {
          username: this.username,
          email: this.email,
          password: this.password
        });
        alert(response.data); // 注册成功提示
        this.$router.push('/login'); // 跳转到登录页面
      } catch (error) {
        this.errorMessage = error.response?.data || "注册失败";
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;
}

.register-card {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
}

h2 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.login-link {
  margin-bottom: 20px;
  font-size: 0.9rem;
  color: #555;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
}

.form-group {
  text-align: left;
  margin-bottom: 20px;
}

.form-group label {
  font-size: 0.9rem;
  color: #555;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 5px;
}

.terms {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
}

.terms label a {
  color: #007bff;
  text-decoration: none;
}

.register-button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 15px;
}

.register-button:disabled {
  background-color: #a0c4ff;
  cursor: not-allowed;
}

.error {
  color: red;
  margin-top: 15px;
  font-weight: bold;
}
</style>
