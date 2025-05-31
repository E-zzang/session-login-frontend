<template>
  <div>
    <h2>Session Login</h2>
    <input v-model="userId" placeholder="아이디" />
    <input v-model="password" placeholder="비밀번호" type="password" />
    <button @click="login">로그인</button>
    <button @click="logout">로그아웃</button>
    <button @click="me">현재 로그인 상태</button>
    <p>{{ result }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from '../axios';

const userId = ref('');
const password = ref('');
const result = ref('');

const login = async () => {
  try {
    const res = await axios.post('/api/login', { userId: userId.value, password: password.value });
    result.value = res.data;
  } catch (e) {
    result.value = '로그인 실패';
  }
};

const logout = async () => {
  await axios.post('/api/logout');
  result.value = '로그아웃 완료';
};

const me = async () => {
  const res = await axios.get('/api/me');
  result.value = res.data;
};
</script>