"use client"

import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

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
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  fetchUserInfo: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(undefined);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(BASE_URL + '/api/login', { email, password });
      const { token, user } = response.data;

      localStorage.setItem('authToken', token);

      setUser(user);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      await axios.post(BASE_URL + '/api/register', { name, email, password });
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(undefined);
  };

  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) return;

      const response = await axios.get(BASE_URL + '/api/users/me', {
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
    fetchUserInfo();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, register, logout, fetchUserInfo }}>
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
