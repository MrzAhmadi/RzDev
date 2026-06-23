<template>
  <section id="privacy">
    <div class="container">
      <div class="section-tag">Privacy</div>
      <h2 class="section-title">Privacy Policy</h2>
      <p class="section-subtitle">We believe in transparency. Here's exactly what data is collected and why.</p>

      <div class="privacy-card">
        <div class="privacy-app-header">
          <img src="/images/icon.png" alt="EmojiVerse" class="privacy-icon" />
          <div>
            <h3>EmojiVerse</h3>
            <p class="updated">Last updated: June 6, 2026</p>
          </div>
        </div>

        <p class="intro">
          EmojiVerse is a free mobile puzzle game. This policy explains what data is collected when you use the app.
          We do not collect any personal information directly. However, the following third-party services are used:
        </p>

        <div class="privacy-items">
          <div v-for="item in privacyItems" :key="item.title" class="privacy-item">
            <div class="privacy-item-icon">{{ item.icon }}</div>
            <div>
              <h4>{{ item.title }}</h4>
              <p v-html="item.description"></p>
            </div>
          </div>
        </div>

        <div class="privacy-note">
          <strong>Contact:</strong>
          For any questions about privacy, contact us at
          <a href="mailto:mrzahmadi96@gmail.com">mrzahmadi96@gmail.com</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const privacyItems = [
  {
    icon: '📢',
    title: 'Google AdMob',
    description: 'We use Google AdMob to show ads. AdMob may collect device identifiers and usage data to serve personalized ads. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google\'s Privacy Policy</a>.',
  },
  {
    icon: '📊',
    title: 'Firebase Analytics',
    description: 'We use Firebase Analytics to understand how users interact with the app (e.g. which levels are played, button taps). No personally identifiable information is collected. See <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a>.',
  },
  {
    icon: '🛡️',
    title: 'Firebase Crashlytics',
    description: 'We use Crashlytics to detect and fix crashes. It collects crash logs and device information. No personal data is included. See <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a>.',
  },
  {
    icon: '💾',
    title: 'Data Storage',
    description: 'Game progress (level, lives) is stored locally on your device only and is never transmitted to our servers.',
  },
  {
    icon: '👶',
    title: "Children's Privacy",
    description: 'EmojiVerse is not directed at children under 13. We do not knowingly collect data from children.',
  },
]
</script>

<style scoped>
.privacy-card {
  margin-top: 56px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 40px;
}

.privacy-app-header {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.privacy-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  flex-shrink: 0;
}

.privacy-app-header h3 {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 4px;
}

.updated {
  font-size: 13px;
  color: var(--text-subtle);
}

.intro {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 32px;
}

.privacy-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.privacy-item {
  display: flex;
  gap: 18px;
  align-items: flex-start;
}

.privacy-item-icon {
  font-size: 22px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.privacy-item h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--text);
}

.privacy-item p {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.65;
}

.privacy-item p :deep(a) {
  color: var(--primary-light);
}

.privacy-note {
  padding: 18px 22px;
  background: rgba(124, 58, 237, 0.07);
  border: 1px solid rgba(124, 58, 237, 0.18);
  border-radius: var(--radius-sm);
  font-size: 14px;
  color: var(--text-muted);
}

.privacy-note a {
  color: var(--primary-light);
}

@media (max-width: 640px) {
  .privacy-card {
    padding: 28px 20px;
  }
}
</style>
