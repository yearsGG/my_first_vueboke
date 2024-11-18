// src/main.js
import { createApp } from 'vue';
import App from './frontend/App.vue';
import router from './frontend/router';
import store from './frontend/store'; // 导入 store

const app = createApp(App);

app.use(router);
app.use(store); // 注册 Vuex

app.mount('#app');
