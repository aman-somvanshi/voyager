import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
  // const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const styles = {
    formGroup: {
      marginBottom: '15px',
      textAlign: 'left',
    },
    label: {
      display: 'block',
      color: '#eee',
      marginBottom: '8px',
      fontSize: '0.9rem',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#fff',
      fontSize: '1rem',
      boxSizing: 'border-box',
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
      width: '100%',
      marginTop: '20px',
    },
    buttonHover: {
      backgroundColor: '#d34a16',
    },
    error: {
      color: '#ff4d4d',
      marginTop: '10px',
      fontSize: '0.8rem',
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); 
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log('Registration submitted:', { username, email, password });

    // setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div style={styles.formGroup}>
        <label htmlFor="username" style={styles.label}>Username</label>
        <input
          type="text"
          id="username"
          style={styles.input}
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div> */}
      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          style={styles.input}
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="password" style={styles.label}>Password</label>
        <input
          type="password"
          id="password"
          style={styles.input}
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          style={styles.input}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        style={styles.button}
        onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
        onMouseOut={(e) => Object.assign(e.target.style, { ...styles.button, ...{ backgroundColor: '#ec5b24' } })}
      >
        Register
      </button>
      {error && <p style={styles.error}>{error}</p>}
    </form>
  );
};

export default RegisterForm;