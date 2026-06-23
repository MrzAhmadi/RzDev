<template>
  <header :class="{ scrolled }">
    <div class="container nav-inner">
      <RouterLink to="/" class="logo">
        <span class="logo-mark">Rz</span>
        <span class="logo-text">Dev</span>
      </RouterLink>
      <nav>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 18px 24px;
  transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
  border-bottom: 1px solid transparent;
}

header.scrolled {
  background: rgba(10, 10, 18, 0.85);
  backdrop-filter: blur(16px);
  border-bottom-color: var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 2px;
  text-decoration: none;
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.logo-mark {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-text {
  color: var(--text);
}

nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

nav a {
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  letter-spacing: 0.01em;
}

nav a:hover {
  color: var(--text);
}

@media (max-width: 480px) {
  nav {
    gap: 20px;
  }
  nav a {
    font-size: 13px;
  }
}
</style>
