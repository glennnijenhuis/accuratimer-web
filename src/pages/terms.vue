<template>
  <div class="page">
    <div class="page-header">
      <div class="container">
        <h1>Terms of Use</h1>
        <p>Last updated: May 15, 2025</p>
      </div>
    </div>
    <div class="container content">

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using the AccuraTimer Control application ("App"),
          you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these
          Terms, do not use the App.
        </p>
      </section>

      <section>
        <h2>2. Description of the App</h2>
        <p>
          AccuraTimer Control is a companion application for AccuraTimer and TrackTimer
          Bluetooth timing hardware. The App allows users to connect to compatible hardware
          devices, configure timing sessions, record lap times, manage athlete profiles,
          and export session data.
        </p>
      </section>

      <section>
        <h2>3. License</h2>
        <p>
          Subject to your compliance with these Terms, AccuraTimer grants you a limited,
          non-exclusive, non-transferable, revocable license to download and use the App
          on a device you own or control, for personal or professional non-commercial use.
        </p>
        <p>
          You may not:
        </p>
        <ul>
          <li>Copy, modify, or distribute the App or its content;</li>
          <li>Reverse engineer, decompile, or disassemble the App;</li>
          <li>Use the App for any unlawful or unauthorised purpose;</li>
          <li>Remove or alter any proprietary notices in the App.</li>
        </ul>
      </section>

      <section>
        <h2>4. Intellectual Property</h2>
        <p>
          The App, including all content, features, functionality, logos, and branding,
          is owned by AccuraTimer and is protected by applicable intellectual property laws.
          All rights not expressly granted are reserved.
        </p>
      </section>

      <section>
        <h2>5. Hardware Disclaimer</h2>
        <p>
          AccuraTimer Control is designed for use with AccuraTimer and TrackTimer hardware
          devices. We do not guarantee compatibility with third-party Bluetooth devices.
          Timing accuracy depends on hardware performance, environmental conditions, and
          correct installation of the physical hardware.
        </p>
      </section>

      <section>
        <h2>6. Disclaimer of Warranties</h2>
        <p>
          The App is provided "as is" and "as available" without warranties of any kind,
          either express or implied. To the fullest extent permitted by law, AccuraTimer
          disclaims all warranties, including but not limited to implied warranties of
          merchantability, fitness for a particular purpose, and non-infringement.
        </p>
        <p>
          We do not warrant that the App will be uninterrupted, error-free, or free of
          viruses or other harmful components.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, AccuraTimer shall not be
          liable for any indirect, incidental, special, consequential, or punitive damages,
          including but not limited to loss of data, loss of revenue, or injury, arising
          out of or in connection with your use of the App.
        </p>
      </section>

      <section>
        <h2>8. User Data</h2>
        <p>
          All data entered into the App is stored locally on your device. You are responsible
          for maintaining backups of your data. AccuraTimer is not liable for data loss
          resulting from device failure, App uninstallation, or other causes. See our
          <RouterLink to="/privacy">Privacy Policy</RouterLink> for more information.
        </p>
      </section>

      <section>
        <h2>9. Updates and Changes</h2>
        <p>
          We may update the App from time to time to add features, fix bugs, or address
          security issues. We reserve the right to modify or discontinue the App at any
          time without notice.
        </p>
        <p>
          We reserve the right to revise these Terms at any time. Continued use of the App
          after changes are posted constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the Netherlands, without regard to
          conflict of law principles. Any disputes arising under these Terms shall be subject
          to the exclusive jurisdiction of the courts of the Netherlands.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          For questions regarding these Terms, please contact us at:<br />
          <a href="mailto:accuratimer@gmail.com">accuratimer@gmail.com</a>
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
  margin-bottom: 48px;
}

h2 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--red);
}

p {
  margin-bottom: 14px;
  color: #444;
  line-height: 1.75;
}

ul {
  padding-left: 24px;
  margin-bottom: 14px;
}

ul li {
  margin-bottom: 8px;
  color: #444;
  line-height: 1.7;
}
</style>
