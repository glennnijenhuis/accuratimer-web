<template>
  <div class="page">
    <div class="page-header">
      <div class="container">
        <h1>Support</h1>
        <p>Need help? We're here for you.</p>
      </div>
    </div>
    <div class="container content">

      <section class="contact-card">
        <h2>Contact Us</h2>
        <p>
          For questions, bug reports, or feature requests, send us an email and we'll get back
          to you as soon as possible.
        </p>
        <a href="mailto:accuratimer@gmail.com" class="email-btn">
          accuratimer@gmail.com
        </a>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>

        <div class="faq-list">

          <details class="faq-item">
            <summary>The app can't find my AccuraTimer device</summary>
            <div class="faq-body">
              <ul>
                <li>Make sure Bluetooth is enabled on your phone.</li>
                <li>On Android, also enable Location services — this is required by Android to scan for Bluetooth devices.</li>
                <li>Make sure the AccuraTimer hardware is powered on and in pairing mode.</li>
                <li>Try closing and reopening the app, then scan again.</li>
                <li>If the device was previously paired with another phone, reset the hardware first.</li>
              </ul>
            </div>
          </details>

          <details class="faq-item">
            <summary>Why does the app need location permission on Android?</summary>
            <div class="faq-body">
              <p>
                Android requires apps to have location permission in order to scan for nearby
                Bluetooth devices. AccuraTimer Control uses this permission only for Bluetooth
                discovery — we never track, store, or transmit your location. See our
                <RouterLink to="/privacy">Privacy Policy</RouterLink> for details.
              </p>
            </div>
          </details>

          <details class="faq-item">
            <summary>The connection drops frequently</summary>
            <div class="faq-body">
              <ul>
                <li>Keep your phone within 10 metres of the timing hardware.</li>
                <li>Avoid environments with heavy 2.4 GHz interference (crowded Wi-Fi areas).</li>
                <li>Make sure the phone's battery saver mode is not restricting Bluetooth.</li>
                <li>Update both the app and the hardware firmware to the latest version.</li>
              </ul>
            </div>
          </details>

          <details class="faq-item">
            <summary>How do I export my session data?</summary>
            <div class="faq-body">
              <p>
                Open a session from the Sessions screen, tap the export icon in the top-right corner,
                and choose between CSV or JSON format. The file will be saved to your device's
                downloads folder or shared via your system share sheet.
              </p>
            </div>
          </details>

          <details class="faq-item">
            <summary>How do I update the hardware firmware?</summary>
            <div class="faq-body">
              <p>
                Connect to your hardware device, navigate to Settings in the app, and look for
                the "Firmware Update" (OTA Update) option. The app will check for available
                updates and guide you through the installation process.
              </p>
            </div>
          </details>

          <details class="faq-item">
            <summary>My session data is gone after reinstalling the app</summary>
            <div class="faq-body">
              <p>
                All data is currently stored locally on your device. Uninstalling the app removes
                all stored sessions. We recommend exporting important sessions to CSV or JSON before
                uninstalling. Cloud backup is planned for a future update.
              </p>
            </div>
          </details>

          <details class="faq-item">
            <summary>Is the app available for iOS?</summary>
            <div class="faq-body">
              <p>
                An iOS version is currently in development and will be available on the Apple App
                Store soon. The Android version is available on Google Play.
              </p>
            </div>
          </details>

          <details class="faq-item">
            <summary>Is the app free?</summary>
            <div class="faq-body">
              <p>
                Yes, AccuraTimer Control is completely free to download and use. There are no
                in-app purchases or subscriptions.
              </p>
            </div>
          </details>

        </div>
      </section>

      <section>
        <h2>Still need help?</h2>
        <p>
          If your question isn't answered above, don't hesitate to reach out directly at
          <a href="mailto:accuratimer@gmail.com">accuratimer@gmail.com</a>.
          Please include your device model, Android/iOS version, and a short description
          of the problem.
        </p>
      </section>

    </div>
  </div>
</template>

<style scoped>
.page-header {
  background: var(--black);
  color: var(--white);
  padding: 56px 0 48px;
}

.page-header h1 {
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.page-header p {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.9rem;
}

.container {
  max-width: 820px;
  margin: 0 auto;
  padding: 0 24px;
}

.content {
  padding-top: 56px;
  padding-bottom: 80px;
}

section {
  margin-bottom: 56px;
}

.contact-card {
  background: var(--light-gray);
  border-radius: var(--radius);
  padding: 36px;
  border-left: 4px solid var(--red);
}

h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--red);
}

.contact-card h2 {
  border-bottom: none;
  padding-bottom: 0;
}

p {
  margin-bottom: 14px;
  color: #444;
  line-height: 1.75;
}

.email-btn {
  display: inline-block;
  background: var(--red);
  color: var(--white);
  padding: 12px 24px;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.2s;
}

.email-btn:hover {
  background: var(--red-dark);
  text-decoration: none;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: var(--white);
  border: 1px solid #e4e4e4;
  border-radius: var(--radius);
  overflow: hidden;
}

.faq-item summary {
  padding: 18px 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.98rem;
  color: var(--dark);
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::after {
  content: '+';
  font-size: 1.3rem;
  color: var(--red);
  font-weight: 400;
  flex-shrink: 0;
}

.faq-item[open] summary::after {
  content: '−';
}

.faq-item[open] summary {
  border-bottom: 1px solid #e4e4e4;
}

.faq-body {
  padding: 18px 20px;
}

.faq-body p {
  margin-bottom: 0;
}

.faq-body ul {
  padding-left: 20px;
  margin-bottom: 0;
}

.faq-body ul li {
  margin-bottom: 8px;
  color: #444;
  line-height: 1.65;
}

.faq-body ul li:last-child {
  margin-bottom: 0;
}
</style>
