<template>
  <div class="privacy-page">
    <div class="container">
      <RouterLink to="/" class="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Back to RzDev
      </RouterLink>

      <h1>Privacy Policy for EmojiVerse</h1>
      <p class="updated"><strong>Last updated:</strong> June 6, 2026</p>

      <p class="intro">
        EmojiVerse ("we", "our", or "us") is a free mobile puzzle game. This policy explains what data is collected when you use the app.
      </p>

      <h2>Information We Collect</h2>
      <p>We do not collect any personal information directly. However, the following third-party services are used:</p>

      <h2>Google AdMob</h2>
      <p>
        We use Google AdMob to show ads. AdMob may collect device identifiers and usage data to serve personalized ads.
        See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
      </p>

      <h2>Firebase Analytics</h2>
      <p>
        We use Firebase Analytics to understand how users interact with the app (e.g. which levels are played, button taps).
        No personally identifiable information is collected.
        See <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a>.
      </p>

      <h2>Firebase Crashlytics</h2>
      <p>
        We use Crashlytics to detect and fix crashes. It collects crash logs and device information. No personal data is included.
        See <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a>.
      </p>

      <h2>Data Storage</h2>
      <p>Game progress (level, lives) is stored locally on your device only and is never transmitted to our servers.</p>

      <h2>Children's Privacy</h2>
      <p>EmojiVerse is not directed at children under 13. We do not knowingly collect data from children.</p>

      <div class="contact-block">
        <p>If you have any questions about this privacy policy, contact us at:</p>
        <a href="mailto:info@RzDev.org" class="contact-email">info@RzDev.org</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.privacy-page {
  min-height: 100vh;
  padding: 100px 24px 80px;
}

.container {
  max-width: 760px;
  margin: 0 auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  margin-bottom: 48px;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--text);
}

h1 {
  font-size: clamp(26px, 5vw, 38px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 12px;
  line-height: 1.2;
}

.updated {
  font-size: 14px;
  color: var(--text-subtle);
  margin-bottom: 32px;
}

.updated strong {
  color: var(--text-muted);
}

.intro {
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}

h2 {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin-top: 36px;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
}

p {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 8px;
}

a {
  color: var(--primary-light);
  text-decoration: none;
}

a:hover {
  color: var(--secondary);
  text-decoration: underline;
}

.contact-block {
  margin-top: 40px;
  padding: 24px 28px;
  background: rgba(124, 58, 237, 0.06);
  border: 1px solid rgba(124, 58, 237, 0.18);
  border-radius: var(--radius-sm);
}

.contact-block p {
  margin-bottom: 10px;
}

.contact-email {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-light);
  text-decoration: none;
  letter-spacing: 0.01em;
}

.contact-email:hover {
  color: var(--secondary);
  text-decoration: none;
}
</style>
