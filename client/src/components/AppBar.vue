<template>
  <div class="q-pa-md">
    <q-layout>
      <q-toolbar  class="bg-purple text-white shadow-2 rounded-borders">
      <q-btn flat label="Homepage" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs shrink> /
        <q-tab v-for="(item, index) in objeto" :key="index"  :label="item" /> 
      </q-tabs>
    </q-toolbar>
    </q-layout>
  </div>
</template>
<script setup>
 import {ref, onMounted} from 'vue'

 const objeto = ref({
  name: 'Inicio',
  icon: ''
 })
</script>