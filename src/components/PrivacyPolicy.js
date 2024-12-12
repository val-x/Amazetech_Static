import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 06-12-2024</p>
      <section>
        <h2 style={styles.sectionTitle}>1. Information We Collect</h2>
        <p>
          <strong>Personal Information:</strong> We collect information such as your name, email address, phone number, and any other personal details provided when you contact us or make a purchase.
        </p>
        <p>
          <strong>Non-Personal Information:</strong> We collect non-personal information such as IP address, browser type, and usage data when you access our website or platform.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>2. How We Use Your Information</h2>
        <ul>
          <li>To provide and improve the services we offer to you.</li>
          <li>To send you updates, promotional offers, and important service-related notifications.</li>
          <li>To comply with legal obligations and regulatory requirements.</li>
        </ul>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>3. Information Sharing</h2>
        <p>
          We do not sell, rent, or share your personal information with third parties, except in the following cases:
        </p>
        <ul>
          <li>When required by law, government request, or legal proceedings.</li>
          <li>
            With trusted service partners (such as payment gateways) who assist us in providing services, bound by confidentiality agreements.
          </li>
        </ul>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>4. Cookies</h2>
        <p>
          Our website uses cookies to improve your browsing experience. You can control your cookie preferences through your browser settings at any time.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>5. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data from unauthorized access or disclosure. However, no security system is infallible, and we cannot guarantee absolute security.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>6. Your Rights</h2>
        <ul>
          <li>You have the right to access your personal data.</li>
          <li>You can request corrections or deletions of your personal data.</li>
          <li>You can withdraw consent to data processing at any time.</li>
        </ul>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>7. Changes to Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page. Continued use of our platform indicates your acceptance of the updated policy.
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
