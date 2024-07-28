<!-- src/components/MainLayout.vue -->
<script setup lang="ts"></script>

<template>
  <div class="layout-wrapper">
    <header class="layout-header">
      <!-- Başlık alanı, navbar vb. -->
      <h1>My App</h1>
    </header>
    <main class="layout-content">
      <router-view />
    </main>
    <footer class="layout-footer">
      <!-- Footer alanı -->
      <p>© 2024 My App</p>
    </footer>
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.layout-header {
  background: #007ad9;
  color: white;
  padding: 1rem;
  text-align: center;
}

.layout-sidebar {
  background: #333;
  color: white;
  width: 200px;
  padding: 1rem;
}

.layout-content {
  flex: 1;
  padding: 1rem;
}

.layout-footer {
  background: #007ad9;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>
