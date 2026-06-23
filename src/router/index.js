import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import PrivacyEmojiVerse from '../pages/PrivacyEmojiVerse.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/privacy/emojiverse', component: PrivacyEmojiVerse },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})
