<script setup>
import { api } from '@/api';
import { useAuthStore } from '@/stores/auth';
import { onMounted, toRefs} from 'vue';
import {router} from '@/router'

const authStore = useAuthStore()

onMounted(async () => {
   try {
    await authStore.loadProfile()
  } catch (error) {
    
  }
})
</script>

<template>
  <div class="q-gutter-md column full-width full-height items-center justify-center">
    <span class="text-h4">Profile</span>
    <span class="">Welcome, {{authStore.profile.username}}!</span>
    <q-btn @click="authStore.increaseCoins" icon="add" color="blue-10">Aumentar Coins</q-btn>
   
  </div>
</template>



<style>
  
</style>