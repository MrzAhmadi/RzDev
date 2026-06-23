<template>
  <footer>
    <div class="container footer-inner">
      <div class="footer-logo">
        <span class="logo-mark">Rz</span><span class="logo-text">Dev</span>
      </div>
      <p class="footer-copy">© {{ year }} RzDev. All rights reserved.</p>
      <div class="footer-links">
        <a href="#products">Products</a>
        <RouterLink to="/privacy/emojiverse">Privacy</RouterLink>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  border-top: 1px solid var(--border);
  padding: 32px 24px;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-logo {
  font-size: 18px;
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

.footer-copy {
  font-size: 13px;
  color: var(--text-subtle);
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-links a {
  font-size: 13px;
  color: var(--text-subtle);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--text-muted);
}

@media (max-width: 600px) {
  .footer-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
