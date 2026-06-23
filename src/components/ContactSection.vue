<template>
  <section id="contact">
    <div class="container">
      <div class="section-tag">Contact</div>
      <h2 class="section-title">Get in Touch</h2>
      <p class="section-subtitle">Have a question, idea, or just want to say hi? We'd love to hear from you.</p>

      <div class="contact-wrap">
        <a href="mailto:info@RzDev.org" class="contact-card">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
              <rect x="2" y="4" width="20" height="16" rx="3"/>
              <path d="m2 7 10 7 10-7"/>
            </svg>
          </div>
          <div class="contact-info">
            <span class="contact-label">Email</span>
            <span class="contact-value">info@RzDev.org</span>
          </div>
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-wrap {
  margin-top: 56px;
  max-width: 620px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 22px 26px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-decoration: none;
  transition: all 0.2s;
  color: var(--text);
}

.contact-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-light);
  color: var(--text);
  transform: translateX(4px);
}

.contact-icon {
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 12px;
  color: var(--primary-light);
  flex-shrink: 0;
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.contact-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-subtle);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.contact-value {
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
}

.arrow {
  color: var(--text-subtle);
  flex-shrink: 0;
  transition: color 0.2s;
}

.contact-card:hover .arrow {
  color: var(--primary-light);
}
</style>
