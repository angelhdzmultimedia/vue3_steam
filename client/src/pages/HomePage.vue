<script setup>
import { useAuthStore } from '@/stores/auth';
import { onMounted, toRefs } from 'vue';
import { api } from '@/api';

const authStore = useAuthStore()

onMounted(async () => {
  try {
   // await authStore.loadProfile()
  } catch (error) {
    
  }
})
</script>

<template>
  <div class="q-gutter-md column full-width full-height items-center justify-center">
    <div class="q-gutter-md column items-center justify-center" v-if="!authStore.profile.isLoggedIn">
      <span class="text-h4">Login</span>
    <q-btn color="blue-10" @click="$router.push('/login')" icon="fab fa-steam" label="Login"></q-btn>
    </div>
    <div v-else>
       <q-card class="my-card bg-blue-10 text-white">
      <q-card-section>
        <div class="text-h6">Dashboard</div>
        <div class="text-subtitle2">Subtitle</div>
      </q-card-section>

      <q-card-section>
        Info
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    </div>
  </div>
</template>

<style>
  
</style>