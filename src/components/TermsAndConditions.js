import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Terms and Conditions</h1>
      <p><strong>Effective Date:</strong> 06-12-2024</p>
      <section>
        <h2 style={styles.sectionTitle}>1. Acceptance of Terms</h2>
        <p>
          By using our website or application, you agree to comply with and be bound by these Terms and Conditions. 
          If you do not agree to these terms, please refrain from using our services and accessing the platform.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>2. Use of Services</h2>
        <ul>
          <li>You may use our services solely for lawful purposes and in compliance with these Terms.</li>
          <li>
            You agree not to misuse the platform or attempt unauthorized access to the platform, 
            or engage in activities that may harm our systems, services, or other users.
          </li>
        </ul>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>3. Intellectual Property</h2>
        <p>
          All content available on our platform, including text, images, logos, software, and other materials, is the property of Amazetech Corporation and is protected by intellectual property laws. 
          You are not allowed to reproduce, distribute, or modify our content without prior written permission.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>4. Products and Services</h2>
        <p>
          All products and services offered on our platform are subject to availability. 
          Amazetech Corporation reserves the right to modify or discontinue any product or service without prior notice.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>5. Limitation of Liability</h2>
        <p>
          Amazetech Corporation is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our platform, products, or services.
        </p>
      </section>
      <section>
        <h2 style={styles.sectionTitle}>6. Changes to Terms</h2>
        <p>
          We may update these Terms and Conditions from time to time. Any changes will be effective immediately upon posting on this page. 
          Your continued use of the platform after the posting of updated terms constitutes your acceptance of the new Terms and Conditions.
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
