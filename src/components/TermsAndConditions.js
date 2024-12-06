import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Terms & Conditions</h1>
      <p><strong>Effective Date:</strong> 06-12-2024</p>
      <section>
        <h2 style={styles.sectionTitle}>1. Acceptance of Terms</h2>
        <p>
          By using our website/application, you agree to comply with and be bound by these Terms & Conditions. 
          If you do not agree, please refrain from using our services.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>2. Use of Services</h2>
        <ul>
          <li>You may use our services solely for lawful purposes.</li>
          <li>
            You agree not to misuse the platform, attempt unauthorized access, or engage in activities that harm our systems or other users.
          </li>
        </ul>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>3. Intellectual Property</h2>
        <p>
          All content on the platform, including text, graphics, logos, and software, is the property of Amazetech Corporation. 
          You may not reproduce, distribute, or modify our materials without prior written permission.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>4. Products and Services</h2>
        <p>
          All products and services provided are subject to availability. 
          Amazetech Corporation reserves the right to modify or discontinue products or services without notice.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>5. Limitation of Liability</h2>
        <p>
          Amazetech Corporation is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our platform or services.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>6. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. Changes will be effective immediately upon posting. 
          Continued use of the platform constitutes your acceptance of the updated terms.
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

export default TermsAndConditions;
