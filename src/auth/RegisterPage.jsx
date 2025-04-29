import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
  const styles = {
    body: {
      background: 'linear-gradient(135deg, #4ca1af, #2c3e50)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    container: {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      padding: '40px',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
      marginTop: '3rem',
    },
    logo: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '30px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    tagline: {
      color: '#eee',
      marginBottom: '25px',
    },
    signupText: {
      color: '#eee',
      marginTop: '20px',
      fontSize: '0.9rem',
    },
    loginLink: {
      color: '#ec5b24',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Voyager</h1>
        <p style={styles.tagline}>
          Join our community and explore the world!
        </p>
        <RegisterForm />
        <p style={styles.signupText}>
          Already have an account? <a href="/login" style={styles.loginLink}>Log in</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;