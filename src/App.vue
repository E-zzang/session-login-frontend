<!-- src/App.vue -->
<template>
  <div>
    <LoginButton />
    <hr />
    <SecureActionButton />
  </div>
</template>

<script setup>
import LoginButton from './components/LoginButton.vue';
import SecureActionButton from './components/SecureActionButton.vue';
</script>