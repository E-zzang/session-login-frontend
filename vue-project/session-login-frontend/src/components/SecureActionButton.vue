// src/components/SecureActionButton.vue
<template>
  <div>
    <button @click="performAction">민감 요청 수행</button>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { api, tabId } from '../axios';

const message = ref('');

const performAction = async () => {
  const activeTabId = localStorage.getItem('ACTIVE_TAB_ID');
  if (tabId !== activeTabId) {
    message.value = '이 탭은 민감 요청을 수행할 수 없습니다. 마지막 로그인 탭을 사용하세요.';
    return;
  }

  try {
    const res = await api.post('/api/protected-action');
    message.value = '요청 성공: ' + res.data;
  } catch (err) {
    message.value = '요청 실패 (세션 만료 또는 인증 실패)';
  }
};
</script>