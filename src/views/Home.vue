<script setup lang="ts">
// --- Vue Import ---
import { onMounted } from 'vue'
// --- Service Import ---
import { getUser } from '@/services/user';
// --- Store Import ---
import store from "../store/index";


onMounted(async () => {
  if (store.getters["auth/isAuthenticated"]) {
    getUser("homework@eva.guru").then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

})


</script>

<template>
  <div class="card flex">
    <div class="container">
      <h1>Home</h1>
    </div>
  </div>
</template>
