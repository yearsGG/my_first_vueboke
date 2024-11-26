import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'; // 导入 Vuex Store
import HomePage from '@/frontend/views/HomePage.vue';
import DocsPage from '@/frontend/views/DocsPage.vue';
import ShopPage from '@/frontend/views/ShopPage.vue';
import OrderPage from '@/frontend/views/OrderPage.vue';
import FriendsPage from '@/frontend/views/FriendsPage.vue';
import ProfilePage from '@/frontend/views/ProfilePage.vue';
import LoginPage from '@/frontend/views/LoginPage.vue';
import RegisterPage from '@/frontend/views/RegisterPage.vue';
import text from "@/frontend/views/text.vue";

const routes = [
    { path: '/', name: 'Home', component: HomePage, meta: { requiresAuth: true }},
    { path: '/docs', name: 'Docs', component: DocsPage, meta: { requiresAuth: true }},
    { path: '/shop', name: 'Shop', component: ShopPage, meta: { requiresAuth: true }},
    { path: '/orders', name: 'OrderPage', component: OrderPage, meta: { requiresAuth: true }},
    { path: '/friends', name: 'Friends', component: FriendsPage, meta: { requiresAuth: true }},
    { path: '/profile', name: 'Profile', component: ProfilePage, meta: { requiresAuth: true }},
    { path: '/login', name: 'Login', component: LoginPage, meta: { hideNavbar: true }},
    { path: '/register', name: 'Register', component: RegisterPage, meta: { hideNavbar: true }},
    { path: '/text', name: 'text', component: text },
];

const router = createRouter({
    history: createWebHistory(), // 默认使用根路径
    routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.isLoggedIn) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;
