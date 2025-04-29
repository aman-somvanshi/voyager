import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';


const RegisterForm = () => {
  // const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

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
      backgroundColor: '#dc3545',
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
      backgroundColor: 'white',
      color:"black"
    },
    error: {
      color: '#ff4d4d',
      marginTop: '10px',
      fontSize: '0.8rem',
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); 
    setSuccess('');
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const newUser = await register(email, password); // Call the register function
      if (newUser) {
        setSuccess('Registration successful! You are now logged in.');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate('/home'); // Redirect to home or dashboard
      } else {
        // The register function in authContext.js should handle setting the error state.
        //  We don't need to do it here, but we could add a generic error message
        setError('Registration failed.');
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.'); // Display error from context
      console.error('Error registering user:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        onMouseOut={(e) => Object.assign(e.target.style, { ...styles.button, ...{ backgroundColor: '#dc3545' } })}
      >
        Register
      </button>
      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}
    </form>
  );
};

export default RegisterForm;