"use client";

import Leaderboard, { User } from "@/app/components/Leaderbord"
import { getLeaderboardData } from "@/lib/getLeaderboardData";
import { useEffect, useState } from "react";

export default function LeaderboardPage() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await getLeaderboardData();
      if (response?.leaderboard){
        setData(response?.leaderboard);
      }
      setLoading(false);
    }

    getData();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-10">Leaderboard</h1>
      <div className="flex justify-center space-x-4 mb-10">
        <button className="bg-yellow-400 px-4 py-2 rounded-full font-semibold">Progress Score</button>
        <button className="bg-white-200 px-4 py-2 rounded-full font-semibold">Community Score</button>
      </div>
      <Leaderboard
        users={data??[]}
      />
    </div>
  );
}
