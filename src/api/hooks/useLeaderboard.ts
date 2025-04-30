import { useQuery } from "@tanstack/react-query"
import { getLeaderboard } from "../queries/leaderboard"
import { LeaderboardUser } from "../types/leaderboard"

export const useLeaderboard = () => {
  return useQuery<LeaderboardUser[]>({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboard,
  })
} 