import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  const styles = {
    body: {
      background: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
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
      marginTop: '35px'
    },
    logo: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '30px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    button: {
      backgroundColor: '#ec5b24',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 25px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginTop: '20px',
    },
    buttonHover: {
      backgroundColor: '#d34a16',
    },
    signupText: {
      color: '#eee',
      marginTop: '20px',
      fontSize: '0.9rem',
    },
    signupLink: {
      color: '#ec5b24',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Voyager</h1>
        <p style={{ color: '#eee', marginBottom: '25px' }}>
          Embark on your next adventure.
        </p>
        <LoginForm/>
        <p style={styles.signupText}>
          Don't have an account? <a href="/signup" style={styles.signupLink}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;