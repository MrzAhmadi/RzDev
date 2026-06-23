<template>
  <NavBar v-if="!isPrivacyPage" />
  <main>
    <RouterView />
  </main>
  <FooterSection v-if="!isPrivacyPage" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

const route = useRoute()
const isPrivacyPage = computed(() => route.path.startsWith('/privacy'))
</script>
