// src/frontend/config/api.js
import axios from 'axios';
export const API_BASE_URL = 'http://localhost:8080/api';
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // 如果需要发送 Cookies 或其他凭证
});

export default apiClient;
