<script setup>
import { useAuthStore } from '@/stores/auth';
import { Permission } from '@server/models/permission.model.js';
import { onMounted, computed } from 'vue';
import {useQuasar} from 'quasar'


const authStore = useAuthStore()

const q = useQuasar()
q.dark.set(true) // Para que la interfaz sea en tema oscuro

onMounted(async () => {
  try {
    await authStore.loadProfile()
  } catch (error) {
    
  }
})
</script>

<template>
  <q-layout >
    <q-header >
      <q-toolbar class="bg-blue-10">
       <q-btn @click="$router.push('/')" icon="menu"></q-btn>
        <q-toolbar-title>
          My Steam
        </q-toolbar-title>
        <div  class="row items-center justify-center q-gutter-sm">
        
         <div v-if="authStore.profile.isLoggedIn">
         <q-btn flat :icon="authStore.permission">
        <q-tooltip>Es {{authStore.permissionText}}</q-tooltip>
        </q-btn>
          <span>ID:</span><span class="text-light-green-13 text-bold">{{authStore.profile.steam_id}}</span>
        <span>Coins:</span><span class="text-light-green-13 text-bold">{{authStore.profile.coins ?? 0}}</span>
         </div>
            <q-avatar size="2.5em" color="black" class="cursor-pointer">
              <q-img :src="authStore.profile.isLoggedIn ? authStore.avatar : '/assets/images/profile-default.png'"></q-img>
              <q-menu fit>
                <q-list class="bg-blue-10">
                  <q-item class="" clickable v-close-popup to="/profile">
                        <q-item clickable class="" >
                        <q-item-section side>
                          <q-avatar size="3em" color="black">
                        <q-img :src="authStore.avatar"></q-img>
                         
                      </q-avatar >
                        </q-item-section>

                         <q-item-section >
                            <q-item-label class="ellipsis" >
                              {{authStore.profile.username}}
                            </q-item-label>
                         </q-item-section>
                        </q-item >
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section>
                        Settings
                    </q-item-section>
                  </q-item>

                  <q-item v-if="authStore.profile.permission === Permission.ADMIN"  v-close-popup >
                    <q-item-section>
                      <q-btn flat label="Admin Panel" @click="$router.push('/admin-panel')" icon="admin_panel_settings"></q-btn>
                      
                   </q-item-section>
                  </q-item>

                  <q-item v-if="authStore.profile.isLoggedIn" clickable v-close-popup @click="authStore.logout">
                    <q-item-section>
                      Cerrar Sesión
                    </q-item-section>
                  </q-item>

                  <q-item v-if="!authStore.profile.isLoggedIn" clickable v-close-popup @click="authStore.login">
                    <q-item-section>
                      Iniciar Sesión
                    </q-item-section>
                  </q-item>
                </q-list>
              
              </q-menu>
            </q-avatar>
         
         
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container class="window-width window-height">
      <q-page class="full-width full-height">
        <router-view></router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>



<style>
  
</style>