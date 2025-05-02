import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../authContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();
  const navigate = useNavigate();
  
  const styles = {
    formGroup: {
      marginBottom: '20px',
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
      backgroundColor: "#dc3545",
      color: "#fff",
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
      color : "black",
      backgroundColor: 'white',
    },
    error: {
      color: '#ff4d4d',
      marginTop: '10px',
      fontSize: '1rem',
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isAuthenticated = login(email, password);
    if (isAuthenticated) {
      navigate("/home")     
    } else {
      // console.log('Login failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={styles.error}>{error}</div>}
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
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        style={styles.button}
        onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
        onMouseOut={(e) => Object.assign(e.target.style, { ...styles.button, ...{ backgroundColor: '#dc3545' } })}
      >
        Log In
      </button>

    </form>
  );
};

export default LoginForm;