import axios from 'axios';

interface Profile {
  skills: string;
  education: Education[];
  experience: Experience[];
  pfp: string;
}

interface Education {
  id: number;
  title: string;
  description: string;
  organization: string;
  startPeriod: Date;
  endPeriod: Date;
}

interface Experience {
  id: number;
  title: string;
  description: string;
  organization: string;
  startPeriod: Date;
  endPeriod: Date;
}

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const getProfile = async (id: number) => {
  const response = await api.get(`/profile/${id}`);
  return response.data;
};

export const updateProfile = async (id: number, profile: Profile) => {
  const response = await api.patch(`/profile/${id}`, profile);
  return response.data;
};

export const createProfile = async (profile: Profile) => {
  const response = await api.post('/profile/me', profile);
  return response.data;
};

export const deleteProfile = async (id: number) => {
  const response = await api.delete(`/profile/${id}`);
  return response.data;
};