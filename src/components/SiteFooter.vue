<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="/images/logo.png" alt="AccuraTimer" class="footer-logo" />
          <p class="footer-tagline">Precision timing for every athlete.</p>
        </div>
        <div class="footer-links">
          <h4>App</h4>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/support">Support</RouterLink>
        </div>
        <div class="footer-links">
          <h4>Legal</h4>
          <RouterLink to="/privacy">Privacy Policy</RouterLink>
          <RouterLink to="/terms">Terms of Use</RouterLink>
        </div>
        <div class="footer-links">
          <h4>Download</h4>
          <a href="https://play.google.com/store/apps/details?id=com.glennnijenhuis.accuratimer_control&hl=en" target="_blank" rel="noopener">Google Play</a>
          <span class="coming-soon">App Store — Coming Soon</span>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ year }} AccuraTimer. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--black);
  color: rgba(255, 255, 255, 0.7);
  padding: 56px 0 0;
  margin-top: 80px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
  height: 48px;
  width: 48px;
  object-fit: contain;
  margin-bottom: 12px;
}

.footer-tagline {
  font-size: 0.9rem;
  line-height: 1.5;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links h4 {
  color: var(--white);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--white);
  text-decoration: none;
}

.coming-soon {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.35);
  font-style: italic;
}

.footer-bottom {
  padding: 20px 0;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.35);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
