<template>
  <section id="home" class="hero">
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>
    <div class="container hero-content">
      <div class="badge">RzDev</div>
      <h1>
        Building digital
        <span class="gradient-text">experiences</span>
        that matter.
      </h1>
      <p>
        We design and build creative apps — mobile games, tools, and utilities
        — crafted with care and purpose.
      </p>
      <div class="hero-actions">
        <a href="#products" class="btn btn-primary">View Our Apps</a>
        <a href="#contact" class="btn btn-ghost">Get in Touch</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 24px 80px;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  opacity: 0.18;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: var(--primary);
  top: -100px;
  left: -200px;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: var(--secondary);
  bottom: -150px;
  right: -150px;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 680px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--primary-light);
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.25);
  padding: 6px 16px;
  border-radius: 100px;
  margin-bottom: 28px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.badge::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--primary-light);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

h1 {
  font-size: clamp(38px, 7vw, 68px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  color: var(--text);
}

.gradient-text {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

p {
  font-size: 18px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 40px;
  max-width: 480px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: var(--radius-sm);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  letter-spacing: 0.01em;
}

.btn-primary {
  background: var(--gradient);
  color: #fff;
  box-shadow: 0 4px 24px rgba(124, 58, 237, 0.35);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.5);
  color: #fff;
}

.btn-ghost {
  color: var(--text-muted);
  border: 1px solid var(--border-light);
  background: transparent;
}

.btn-ghost:hover {
  background: var(--bg-card);
  color: var(--text);
  border-color: var(--border-light);
}
</style>
