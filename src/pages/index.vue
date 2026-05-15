<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <img src="/images/logoFull.png" alt="AccuraTimer Control" class="hero-logo" />
        <h1>Precision Timing,<br /><span class="accent">Total Control</span></h1>
        <p class="hero-sub">
          The official companion app for AccuraTimer and TrackTimer IR speed gates.
          Connect via Bluetooth, configure race modes, and track every millisecond.
        </p>
        <div class="download-buttons">
          <a
            href="https://play.google.com/store/apps/details?id=com.glennnijenhuis.accuratimer_control&hl=en"
            target="_blank"
            rel="noopener"
            class="btn-store btn-google"
          >
            <svg class="store-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.33.18.7.22 1.06.13l11.37-11.37L12 9l-8.82 14.76zM20.5 10.56l-2.54-1.47-3.22 3.22 3.22 3.22 2.57-1.48c.73-.43.73-1.48-.03-2.49zM2.01 1.19C1.8 1.43 1.67 1.8 1.67 2.27v19.46c0 .47.13.84.35 1.07L1.95 23l10.89-10.89v-.26L2.01 1.19zM15.65 4.72L4.24.13C3.88.04 3.5.09 3.18.27L12 9l3.65-4.28z"/></svg>
            <div class="btn-text">
              <span class="btn-sub">Get it on</span>
              <span class="btn-main">Google Play</span>
            </div>
          </a>
          <div class="btn-store btn-apple btn-disabled" title="Coming soon to the App Store">
            <svg class="store-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.15 1.26-2.13 3.75.03 2.98 2.61 3.97 2.64 3.98l-.06.39zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <div class="btn-text">
              <span class="btn-sub">Coming soon on the</span>
              <span class="btn-main">App Store</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <img src="/images/homePage.jpg" alt="AccuraTimer in action" class="app-preview" />
      </div>
    </section>

    <!-- Features -->
    <section class="features">
      <div class="container">
        <h2>Everything you need to time with precision</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">&#x1F4F6;</div>
            <h3>Bluetooth Connect</h3>
            <p>Instantly pair with your AccuraTimer or TrackTimer hardware over Bluetooth Low Energy.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x23F1;</div>
            <h3>Real-Time Lap Times</h3>
            <p>Capture and display lap times the moment your athlete crosses the gate — down to the millisecond.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x1F4CA;</div>
            <h3>Session Analytics</h3>
            <p>View charts, compare sessions, and track progress over time for every athlete.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x2699;&#xFE0F;</div>
            <h3>Hardware Configuration</h3>
            <p>Set distances, configure LED signals, adjust detection sensitivity, and set start procedures — all from your phone.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x1F4E4;</div>
            <h3>Export Data</h3>
            <p>Export sessions to CSV or JSON for further analysis in your preferred tools.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">&#x1F30D;</div>
            <h3>Multilingual</h3>
            <p>Available in English, Dutch, and Spanish. More languages coming soon.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <h2>Ready to time smarter?</h2>
        <p>Download AccuraTimer Control and take full command of your timing hardware.</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.glennnijenhuis.accuratimer_control&hl=en"
          target="_blank"
          rel="noopener"
          class="cta-btn"
        >Download on Google Play</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero */
.hero {
  background: var(--black);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 80px 10%;
  min-height: 540px;
}

.hero-content {
  max-width: 520px;
}

.hero-logo {
  height: 64px;
  object-fit: contain;
  margin-bottom: 24px;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.accent {
  color: var(--red-light);
}

.hero-sub {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin-bottom: 36px;
}

.download-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-store {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius);
  padding: 12px 20px;
  color: var(--white);
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;
  cursor: pointer;
}

.btn-store:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.35);
  text-decoration: none;
}

.btn-disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.btn-disabled:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.store-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

.btn-text {
  display: flex;
  flex-direction: column;
}

.btn-sub {
  font-size: 0.7rem;
  opacity: 0.7;
}

.btn-main {
  font-size: 1rem;
  font-weight: 700;
}

.hero-image {
  flex-shrink: 0;
}

.app-preview {
  width: 320px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

/* Features */
.features {
  padding: 96px 0;
  background: var(--white);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.features h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 56px;
  color: var(--dark);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.feature-card {
  background: var(--light-gray);
  border-radius: var(--radius);
  padding: 32px 28px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--dark);
}

.feature-card p {
  font-size: 0.92rem;
  color: var(--gray);
  line-height: 1.65;
}

/* CTA */
.cta {
  background: var(--red);
  color: var(--white);
  text-align: center;
  padding: 80px 24px;
}

.cta h2 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.cta p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 32px;
}

.cta-btn {
  display: inline-block;
  background: var(--white);
  color: var(--red);
  font-weight: 700;
  font-size: 1rem;
  padding: 14px 32px;
  border-radius: var(--radius);
  text-decoration: none;
  transition: opacity 0.2s;
}

.cta-btn:hover {
  opacity: 0.9;
  text-decoration: none;
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    padding: 60px 24px;
    text-align: center;
  }

  .hero h1 {
    font-size: 2.2rem;
  }

  .download-buttons {
    justify-content: center;
  }

  .app-preview {
    width: 100%;
    max-width: 360px;
    height: auto;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
