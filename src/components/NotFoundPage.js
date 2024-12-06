import React from 'react';
import { Link } from 'react-router-dom'; // Replace with your routing library if not using React Router

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.subtitle}>Page Not Found</h2>
      <p style={styles.message}>
        Oops! Looks like we’re still <span style={styles.highlight}>working on it</span>. 🚧
      </p>
      <p style={styles.message}>
        Let’s get you back on track. Click below to return to safety. 🏠
      </p>
      <Link to="/" style={styles.link}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '50px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '6rem',
    fontWeight: 'bold',
    margin: '0',
    color: '#ff6f61',
  },
  subtitle: {
    fontSize: '2rem',
    margin: '10px 0',
    color: '#555',
  },
  message: {
    fontSize: '1.2rem',
    margin: '20px 0',
  },
  highlight: {
    color: '#ff6f61',
    fontWeight: 'bold',
  },
  link: {
    fontSize: '1.5rem',
    color: '#ffffff',
    backgroundColor: '#007bff',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: '0.3s',
  },
};

export default NotFoundPage;
