<script setup lang="ts">
// --- Vue Import ---
import { onMounted } from "vue";
// --- Service Import ---
import { getUser } from "@/services/user";
// --- Store Import ---
import store from "../store/index";

onMounted(async () => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];
  const token = store.getters["auth/token"];
  if (isAuthenticated && token && token != null) {
    const email = store.getters["auth/email"];
    getUser(email)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  }
});
</script>

<template>
  <div class="card flex">
    <div class="container">
      <h1>Home</h1>
    </div>
  </div>
</template>
