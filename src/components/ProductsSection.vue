<template>
  <section id="products">
    <div class="container">
      <div class="section-tag">Our Apps</div>
      <h2 class="section-title">What We've Built</h2>
      <p class="section-subtitle">Thoughtfully crafted apps designed to entertain and challenge.</p>

      <div class="product-card">
        <div class="product-header">
          <img src="/images/icon.png" alt="EmojiVerse Icon" class="app-icon" />
          <div class="product-meta">
            <div class="product-platform">Android</div>
            <h3 class="product-name">EmojiVerse</h3>
            <p class="product-tagline">Find the odd emoji out! A fun, fast puzzle game that tests your eyes.</p>
            <div class="product-actions">
              <a
                href="https://play.google.com/store/apps/details?id=io.github.mrzahmadi.emojiverse"
                target="_blank"
                rel="noopener noreferrer"
                class="play-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M3.18 23.76A2 2 0 0 1 2 22V2a2 2 0 0 1 1.18-1.76l11.65 11.65L3.18 23.76zM22 12l-3.66 2.12-3.25-3.25L18.34 7.88 22 10a2 2 0 0 1 0 2zM5.04 1.17l12.47 7.2-2.87 2.87L5.04 1.17zM14.63 15.64l2.88 2.87-12.47 7.2 9.59-10.07z"/>
                </svg>
                Get it on Google Play
              </a>
              <RouterLink to="/privacy/emojiverse" class="privacy-btn">
                Privacy Policy
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="product-features">
          <div v-for="feature in features" :key="feature.text" class="feature-chip">
            <span class="feature-icon">{{ feature.icon }}</span>
            {{ feature.text }}
          </div>
        </div>

        <div class="screenshots-wrapper">
          <div class="screenshots-scroll">
            <img
              v-for="(src, i) in screenshots"
              :key="i"
              :src="src"
              :alt="`EmojiVerse screenshot ${i + 1}`"
              class="screenshot"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const screenshots = [
  '/images/screen1.png',
  '/images/screen2.png',
  '/images/screen3.png',
  '/images/screen4.png',
  '/images/screen5.png',
  '/images/screen6.png',
]

const features = [
  { icon: '🎮', text: 'Hundreds of levels' },
  { icon: '⏱️', text: 'Timer challenge' },
  { icon: '⭐', text: 'Star rating system' },
  { icon: '❤️', text: 'Lives system' },
  { icon: '📈', text: 'Increasing difficulty' },
  { icon: '🏆', text: 'Progress tracking' },
]
</script>

<style scoped>
.product-card {
  margin-top: 56px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 40px;
  transition: border-color 0.3s;
}

.product-card:hover {
  border-color: var(--border-light);
}

.product-header {
  display: flex;
  gap: 28px;
  align-items: flex-start;
  margin-bottom: 32px;
}

.app-icon {
  width: 96px;
  height: 96px;
  border-radius: 22px;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}

.product-meta {
  flex: 1;
}

.product-platform {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--secondary);
  margin-bottom: 6px;
}

.product-name {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
  color: var(--text);
}

.product-tagline {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 480px;
}

.product-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.play-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #1d9e3e;
  color: #fff;
  padding: 12px 22px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 4px 16px rgba(29, 158, 62, 0.3);
}

.play-btn:hover {
  background: #22b848;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(29, 158, 62, 0.4);
}

.privacy-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  transition: all 0.2s;
}

.privacy-btn:hover {
  color: var(--text);
  border-color: var(--border-light);
  background: rgba(255,255,255,0.04);
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 36px;
}

.feature-chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  color: var(--text-muted);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  padding: 7px 14px;
  border-radius: 100px;
}

.feature-icon {
  font-size: 15px;
}

.screenshots-wrapper {
  overflow: hidden;
  border-radius: 12px;
  background: var(--bg);
  padding: 24px;
  margin: 0 -8px;
}

.screenshots-scroll {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
  scrollbar-width: thin;
  scrollbar-color: var(--border-light) transparent;
}

.screenshots-scroll::-webkit-scrollbar {
  height: 6px;
}
.screenshots-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.screenshots-scroll::-webkit-scrollbar-thumb {
  background: var(--border-light);
  border-radius: 3px;
}

.screenshot {
  height: 380px;
  width: auto;
  border-radius: 12px;
  flex-shrink: 0;
  box-shadow: var(--shadow);
  transition: transform 0.2s;
}

.screenshot:hover {
  transform: scale(1.02);
}

@media (max-width: 640px) {
  .product-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .product-tagline {
    max-width: 100%;
  }
  .product-features {
    justify-content: center;
  }
  .product-actions {
    justify-content: center;
  }
  .product-card {
    padding: 28px 20px;
  }
  .screenshot {
    height: 280px;
  }
}
</style>
