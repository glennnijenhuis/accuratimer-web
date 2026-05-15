<template>
  <div class="page">
    <div class="page-header">
      <div class="container">
        <h1>Privacy Policy</h1>
        <p>Last updated: May 15, 2025</p>
      </div>
    </div>
    <div class="container content">

      <section>
        <h2>1. Introduction</h2>
        <p>
          AccuraTimer ("we", "our", or "us") operates the AccuraTimer Control mobile application
          (the "App"). This Privacy Policy explains what information we collect, how we use it,
          and your rights regarding that information.
        </p>
        <p>
          By using the App, you agree to the terms of this Privacy Policy. If you do not agree,
          please discontinue use of the App.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <h3>2.1 Information you provide</h3>
        <p>
          The App currently does <strong>not</strong> require you to create an account or provide
          any personal information. All data you enter (athlete names, session results) is stored
          locally on your device and is never transmitted to our servers.
        </p>

        <h3>2.2 Automatically collected information</h3>
        <p>
          We do <strong>not</strong> collect analytics, usage statistics, crash reports, or any
          other data automatically. The App contains no third-party analytics SDKs (such as
          Firebase Analytics, Google Analytics, or similar services).
        </p>

        <h3>2.3 Bluetooth data</h3>
        <p>
          The App uses Bluetooth Low Energy (BLE) to discover and communicate with AccuraTimer
          and TrackTimer hardware devices. Device names and identifiers are used solely to
          establish the connection and are never stored permanently or transmitted outside your device.
        </p>

        <h3>2.4 Location data</h3>
        <p>
          On Android devices, the operating system requires location permission to scan for
          nearby Bluetooth devices. We request this permission only for BLE device discovery.
          We do <strong>not</strong> collect, store, or transmit your geographic location at any time.
        </p>
      </section>

      <section>
        <h2>3. Permissions We Request</h2>
        <table>
          <thead>
            <tr>
              <th>Permission</th>
              <th>Platform</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bluetooth Scan &amp; Connect</td>
              <td>Android &amp; iOS</td>
              <td>Discover and connect to AccuraTimer hardware</td>
            </tr>
            <tr>
              <td>Location (approximate)</td>
              <td>Android only</td>
              <td>Required by Android OS for BLE scanning — not used for location tracking</td>
            </tr>
            <tr>
              <td>Storage</td>
              <td>Android</td>
              <td>Save session data locally on your device</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>4. Local Data Storage</h2>
        <p>
          Session data (lap times, athlete records, configuration settings) is stored exclusively
          on your device using local storage. This data is under your full control. Uninstalling
          the App will permanently delete all locally stored data.
        </p>
      </section>

      <section>
        <h2>5. Future Features: Accounts &amp; Cloud Storage</h2>
        <p>
          We plan to introduce optional account registration and cloud synchronisation features
          in a future version of the App. When these features are available:
        </p>
        <ul>
          <li>Account creation will require an email address and password.</li>
          <li>Session data you choose to sync will be stored on our secure servers.</li>
          <li>We will only collect the minimum data necessary to provide the service.</li>
          <li>You will always be able to use the App without an account (local-only mode).</li>
          <li>This Privacy Policy will be updated before those features are released.</li>
        </ul>
      </section>

      <section>
        <h2>6. Third-Party Services</h2>
        <p>
          The App currently uses no third-party services that collect personal data.
          The App Store listings (Google Play, Apple App Store) are subject to the respective
          platform's own privacy policies.
        </p>
      </section>

      <section>
        <h2>7. Children's Privacy</h2>
        <p>
          The App is not directed at children under the age of 13. We do not knowingly collect
          personal information from children. If you believe a child has provided us with personal
          information, please contact us so we can delete it.
        </p>
      </section>

      <section>
        <h2>8. Data Security</h2>
        <p>
          Because all data is stored locally on your device, its security depends on your
          device's security settings (screen lock, encryption). We recommend keeping your
          device software up to date.
        </p>
      </section>

      <section>
        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes will be
          communicated via an App update or notice on this page. Continued use of the App
          after changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2>10. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at:<br />
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

h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--dark);
  margin: 20px 0 10px;
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

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 14px;
  font-size: 0.92rem;
}

th {
  background: var(--dark);
  color: var(--white);
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
}

td {
  padding: 12px 16px;
  border-bottom: 1px solid #e8e8e8;
  color: #444;
}

tr:nth-child(even) td {
  background: var(--light-gray);
}
</style>
