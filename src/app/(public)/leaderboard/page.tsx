"use client";

import Leaderboard from "@/app/components/Leaderbord"
import { useLeaderboard } from "@/api/hooks/useLeaderboard"

export default function LeaderboardPage() {
  const { data, isLoading, error } = useLeaderboard()

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-10">Leaderboard</h1>
        <div className="flex justify-center space-x-4 mb-10">
          <button className="bg-yellow-400 px-4 py-2 rounded-full font-semibold">Progress Score</button>
          <button className="bg-white-200 px-4 py-2 rounded-full font-semibold">Community Score</button>
        </div>
        <div>Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-10">Leaderboard</h1>
        <div className="flex justify-center space-x-4 mb-10">
          <button className="bg-yellow-400 px-4 py-2 rounded-full font-semibold">Progress Score</button>
          <button className="bg-white-200 px-4 py-2 rounded-full font-semibold">Community Score</button>
        </div>
        <div>Error loading leaderboard</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-10">Leaderboard</h1>
      <div className="flex justify-center space-x-4 mb-10">
        <button className="bg-yellow-400 px-4 py-2 rounded-full font-semibold">Progress Score</button>
        <button className="bg-white-200 px-4 py-2 rounded-full font-semibold">Community Score</button>
      </div>
      <Leaderboard
        users={data ?? []}
      />
    </div>
  )
}
