"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

type User = {
  name: string | null;
  email: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
} | undefined;

type UserContextType = {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  fetchUserInfo: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(undefined);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', { email, password });
      const { token, user } = response.data;

      // Save token to local storage
      localStorage.setItem('authToken', token);

      // Update user state
      setUser(user);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };



  const logout = () => {
    // Clear token and user state
    localStorage.removeItem('authToken');
    setUser(undefined);
  };

  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) return;

      const response = await axios.get('http://localhost:3000/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      logout();
    }
  };

  useEffect(() => {
    // Automatically fetch user info on app load if a token exists
    fetchUserInfo();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout, fetchUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};