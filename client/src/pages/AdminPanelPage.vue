<script setup>
import { useAuthStore } from '../stores/auth';
import {useUserStore} from '../stores/user'
import { onMounted, toRefs } from 'vue';
import { api } from '@/api';

// Stores
const authStore = useAuthStore()
const userStore = useUserStore()

onMounted(async () => {
  try {
   await authStore.loadProfile()
   await userStore.loadUsers()
  } catch (error) {
    
  } 
})
</script>

<template>
  <div class="q-gutter-md column full-width full-height items-center justify-center">
    <div class="q-gutter-md column items-center justify-center" v-if="!authStore.profile.isLoggedIn">
      <span class="text-h4">Admin Panel</span>
    <q-btn color="blue-10" @click="$router.push('/login')" icon="fab fa-steam" label="Login"></q-btn>
    </div>
    <div class="q-gutter-md" v-else>
       <q-card  class="my-card bg-blue-10 text-white">
      <q-card-section>
        <div class="text-h6">Users</div>
      </q-card-section>

      <q-card-section >
       <q-table  :dark="false" :rows="userStore.users" :columns="userStore.usersTableColumns">
       <template #body-cell-avatar="props">
       <td>
                  <q-avatar size="3em"><q-img :src="props.value"></q-img></q-avatar>

       </td>
       </template>
       </q-table>
      </q-card-section>

      <q-separator  />

      <q-card-actions align="right">
        <q-btn color="white" text-color="black">Cancelar</q-btn>
        <q-btn color="white" text-color="black">Actualizar</q-btn>
      </q-card-actions>
    </q-card>

    </div>
  </div>
</template>



<style>
  
</style>