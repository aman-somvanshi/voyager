// src/authContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usersData, setUsersData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://voyager-backend-za5b.onrender.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
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
    console.log("checking in local storage")
    if (storedUser) {
      try {
        console.log("checking just before setting user")  
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
    console.log("user is " + user);
    console.log("foundUser is " + foundUser );

    if (foundUser) {
      setUser(foundUser);
      console.log("After finding " + user);
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

  const register = async (name, email, password) => {
    try {
        const getUsersResponse = await fetch('https://voyager-backend-za5b.onrender.com/users');
        if (!getUsersResponse.ok) {
            throw new Error("Failed to fetch existing users");
        }
        const existingUsers = await getUsersResponse.json();

        // Check if the email already exists
        const emailExists = existingUsers.some(user => user.email === email);
        if (emailExists) {
          setError('An account with this email already exists.');
          return null; // Indicate registration failure
        }
        const nextId = String(existingUsers.length + 1);

        const response = await fetch('https://voyager-backend-za5b.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: nextId, name, email, password })
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
    <AuthContext.Provider value={{ user, loading, error, setError, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};