import axios from "axios";

export const getLeaderboardData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/leaderboard');
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };