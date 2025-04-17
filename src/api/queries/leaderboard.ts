import { api } from "../api"
import { LeaderboardUser } from "../types/leaderboard"

export const getLeaderboard = async (): Promise<LeaderboardUser[]> => {
  const response = await api.get("/api/leaderboard")
  return response.data
} 