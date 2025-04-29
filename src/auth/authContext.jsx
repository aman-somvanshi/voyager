// src/authContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usersData, setUsersData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/users'); // for users.json
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setUsersData(data);
      } catch (err) {
        setError('Failed to load user data.');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };


    // Check for existing session on initial load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Error parsing stored user data", e);
        localStorage.removeItem('user'); // Clear corrupted data
      }
    }
    fetchUsers(); // Fetch users data
    setLoading(false); //set loading to false after attempting to load initial user and fetching
  }, []);

  useEffect(() => {
    // Persist user data to localStorage whenever it changes
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user'); // Remove when logged out
    }
  }, [user]);

  const login = (email, password) => {
    if (!usersData) {
      setError('User data not loaded yet.');
      return false;
    }

    const foundUser = usersData.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      setError(null);
      return true;
    } else {
      setError('Invalid email or password.');
      setUser(null);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  const register = async (email, password) => {
    try {
        const getUsersResponse = await fetch('http://localhost:3000/users');
        if (!getUsersResponse.ok) {
            throw new Error("Failed to fetch existing users");
        }
        const existingUsers = await getUsersResponse.json();
        const nextId = String(existingUsers.length + 1);

        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: nextId, email, password })
        });
        if (!response.ok) {
            throw new Error("Failed to register new user");
        }
        const newUser = await response.json();
        setUser(newUser); // Auto-login the user after successful registration
        return newUser;

    } catch (error) {
        setError(error.message);
        console.error("Registration error:", error);
        return null;
    }
}

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};