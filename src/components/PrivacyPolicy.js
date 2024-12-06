import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 06-12-2024</p>
      <section>
        <h2 style={styles.sectionTitle}>1. Information We Collect</h2>
        <p>
          <strong>Personal Information:</strong> Name, email address, phone number, and other details provided by you when contacting us or purchasing our services.
        </p>
        <p>
          <strong>Non-Personal Information:</strong> IP address, browser type, and usage data collected automatically when you access our platform.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>2. How We Use Your Information</h2>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To communicate updates, offers, and service-related information.</li>
          <li>To comply with legal requirements.</li>
        </ul>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>3. Information Sharing</h2>
        <p>
          We do not sell, rent, or share your information with third parties, except:
        </p>
        <ul>
          <li>When required by law or legal proceedings.</li>
          <li>
            With trusted partners assisting us in delivering services (e.g., payment gateways), bound by confidentiality agreements.
          </li>
        </ul>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>4. Cookies</h2>
        <p>
          Our website/application may use cookies to enhance user experience. You can control cookie preferences through your browser settings.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>5. Data Security</h2>
        <p>
          We employ industry-standard measures to protect your data from unauthorized access, disclosure, or destruction. However, no method is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>6. Your Rights</h2>
        <ul>
          <li>Access your personal data.</li>
          <li>Request corrections or deletions of your data.</li>
          <li>Withdraw consent to data processing.</li>
        </ul>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>7. Changes to Privacy Policy</h2>
        <p>
          We may update this policy periodically. Changes will be posted on this page, and your continued use of our platform constitutes acceptance of the updated policy.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: { padding: '100px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' },
  title: { textAlign: 'center', marginBottom: '20px' },
  sectionTitle: { marginTop: '15px' },
};

export default PrivacyPolicy;
