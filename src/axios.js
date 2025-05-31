// ✅ 전제: Vue 3 + Axios + Vite 기반
// ✅ 목표: 로그인 세션이 유효하고, 마지막으로 로그인한 탭에서만 특정 요청 버튼이 동작하게 제한

// src/axios.js
import axios from 'axios';

// 탭 고유 ID 생성 (sessionStorage는 탭마다 다름)
if (!sessionStorage.getItem('TAB_ID')) {
    sessionStorage.setItem('TAB_ID', 'TAB-' + crypto.randomUUID());
}

const tabId = sessionStorage.getItem('TAB_ID');

const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true
});

// 모든 요청에 현재 탭 ID 포함
api.interceptors.request.use((config) => {
    config.headers['X-Tab-ID'] = tabId;
    return config;
});

export { api, tabId };