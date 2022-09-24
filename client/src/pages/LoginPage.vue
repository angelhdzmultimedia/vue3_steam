<script setup>
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue'

const authStore = useAuthStore()

onMounted(() => {
  authStore.login()
})
</script>

<template>
  <div class="q-gutter-md column full-width full-height items-center justify-center">
    <span class="text-h4">Logging in...</span>
  </div>
</template>