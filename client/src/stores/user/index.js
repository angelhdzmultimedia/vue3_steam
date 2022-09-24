import {api} from '@/api'
import { ref, reactive, computed } from 'vue'

const users = ref([])
const usersTableColumns = [
  {
    name: 'steam_id',
    field: 'steam_id',
    label: 'Steam ID',
    align: 'left'
  },
  
  {
    name: 'username',
    field: 'username',
    label: 'Username',
    align: 'left'
  },

  {
    name: 'coins',
    field: 'coins',
    label: 'Coins',
    align: 'left'
  },

  {
    name: 'permission',
    field: 'permission',
    label: 'Permission',
    align: 'left'
  },

  {
    name: 'avatar',
    field: 'avatar',
    label: 'Avatar',
    align: 'left'
  }
]

async function loadUsers() {
  try {
    const {data} = await api.get('/users')

    users.value = data ?? []
  } catch (error) {
    
  } 
}

export function useUserStore() {
  return reactive({
    loadUsers,
    users,
    usersTableColumns,
  })
}