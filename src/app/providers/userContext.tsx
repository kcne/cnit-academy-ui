"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { BASE_URL } from "./envConstants";

export type User =
  | {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
      skills: string[];
      pfp: string;
      totalCoins: number;
      streak: number;
      badges: {
        title: string;
        icon: string;
      }[];
      education: object[];
      experience: object[];
    }
  | undefined;

type UserContextType = {
  user: User;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  registerForm: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    pfp: File,
  ) => Promise<void>;
  logout: () => void;
  fetchUserInfo: () => Promise<void>;
  verifyEmail: (code: string) => Promise<boolean>;
  resendEmail: () => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(undefined);
  const [loading, setLoading] = useState(true);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await axios.post(BASE_URL + "/api/auth/login", {
        email,
        password,
      });
      const { token } = response.data;

      localStorage.setItem("authToken", token);
      await fetchUserInfo();
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const registerForm = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    pfp: File,
  ) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("pfp", pfp);

      await axios.post(BASE_URL + "/api/auth/register-form", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(undefined);
  };

  const fetchUserInfo = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      if (!token) {
        setUser(undefined);
        return;
      }

      const response = await axios.get(BASE_URL + "/api/profile/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user info:", error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async (code: string) => {
    try {
      setLoading(true);
      await axios.post(BASE_URL + "/api/auth/verify-email", {
        email: user?.email,
        code,
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resendEmail = async () => {
    try {
      setLoading(true);
      await axios.post(BASE_URL + "/api/auth/resend-email", {
        email: user?.email,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        login,
        registerForm: registerForm,
        logout,
        fetchUserInfo,
        verifyEmail,
        resendEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
