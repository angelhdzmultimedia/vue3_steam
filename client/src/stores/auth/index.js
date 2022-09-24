import {api} from '@/api'
import { Permission } from '@server/models/permission.model.js'
import { ref, reactive, computed } from 'vue'

const profile = ref({
  isLoggedIn: false,
  coins: null,
  username: null,
  steam_id: null,
  avatar: null,
  permission: null,
})

async function loadProfile() {
  profile.value.coins = null
  profile.value.username = null
  profile.value.steam_id = null
  profile.value.avatar = null
  profile.value.permission = null
  profile.value.isLoggedIn = false

  try {
    const {data} = await api.get('/profile')
    //alert(data)
    if (data) {
      profile.value.coins = data.coins 
      profile.value.username = data.username
      profile.value.steam_id = data.steam_id
      profile.value.avatar = data.avatar
      profile.value.permission = data.permission
      profile.value.isLoggedIn = true
     // alert('logged in')
    } else {
     // alert("not logged in")
    }
  } catch (error) {
   // alert(error)
  } 
}

const avatar = computed(() => {
  return profile.value.avatar ? profile.value.avatar : '/assets/images/profile-default.png'
})

const permission = computed(() => {
  return profile.value.permission & Permission.ADMIN ? 'admin_panel_settings' :
         profile.value.permission & Permission.EDITOR ? 'edit' : 
         profile.value.permission & Permission.USER ? 'person' :
         'person'
})

const permissionText = computed(() => {
  return profile.value.permission & Permission.ADMIN ? 'Admin' :
         profile.value.permission & Permission.EDITOR ? 'Editor' :
         profile.value.permission & Permission.USER ? 'Editor' :
        'User'
})

async function increaseCoins() {
  const {data} = await api.patch(`/profile/${profile.value.steam_id}`, {
    coins: profile.value.coins + 1
  }) 
  profile.value.coins = data.coins ?? profile.value.coins
}

async function logout() {
  window.location.replace('http://localhost:5000/api/auth/logout')
}

async function login() {
  window.location.replace('http://localhost:5000/api/auth/steam/login')
}

export function useAuthStore() {
  return reactive({
    profile,
    avatar,
    permission,
    permissionText,
    login,
    logout,
    increaseCoins,
    loadProfile,
  })
}