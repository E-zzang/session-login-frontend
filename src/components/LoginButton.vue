// src/components/LoginButton.vue
<template>
  <div>
    <h2>로그인</h2>
    <input v-model="userId" placeholder="userId" />
    <input v-model="password" type="password" placeholder="password" />
    <button @click="login">로그인</button>
    <p>{{ result }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { api, tabId } from '../axios';

const userId = ref('');
const password = ref('');
const result = ref('');

const login = async () => {
  try {
    const res = await api.post('/api/login', { userId: userId.value, password: password.value });
    result.value = res.data;
    localStorage.setItem('ACTIVE_TAB_ID', tabId); // 이 탭을 마지막으로 로그인한 탭으로 설정
  } catch (err) {
    result.value = '로그인 실패';
  }
};
</script>