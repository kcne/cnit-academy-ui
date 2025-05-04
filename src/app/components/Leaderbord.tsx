"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export type User = {
  id: string;
  totalCoins: number;
  firstName: string;
  lastName: string;
  updatedAt: string;
  country?: string;
};

interface LeaderboardProps {
  users: User[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ users }) => {
  const sortedUsers = [...users].sort((a, b) => b.totalCoins - a.totalCoins);
  const topThree = sortedUsers.slice(0, 3);
  const restUsers = sortedUsers.slice(3, 20);
  const { t } = useTranslation();

  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A5",
    "#FFD633",
    "#8E44AD",
    "#3498DB",
    "#2ECC71",
    "#E74C3C",
    "#F39C12",
    "#1ABC9C",
    "#9B59B6",
    "#34495E",
    "#16A085",
    "#F1C40F",
    "#E67E22",
    "#2C3E50",
    "#7F8C8D",
    "#D35400",
    "#C0392B",
  ];

  return (
    <div className="w-[700px] min-h-[400px] mx-auto p-8 bg-white rounded-lg shadow-2xl">
      <div className="mt-[-10px] space-x-6">
        <span className="text-sm text-black-500">
          {t("leaderboard.thisWeek")}
        </span>
        <span className="text-sm text-gray-500">
          {t("leaderboard.allTimes")}
        </span>
      </div>

      <div className="flex items-center">
        <span className="text-xs text-black-500  ml-auto ">
          👥 268563 {t("leaderboard.attednees")}
        </span>
      </div>

      <div className="flex justify-center space-x-6 mt-10 mb-12">
        {topThree.map((user, index) => (
          <div
            key={user.id}
            className="flex flex-col items-center  space-x-0 relative"
          >
            <div
              className={`w-20 h-20 flex items-center justify-center text-xl font-bold text-white rounded-full mx-12 ${
                index === 0
                  ? "bg-pink-500"
                  : index === 1
                  ? "bg-gray-400"
                  : "bg-blue-700"
              }`}
            >
              {user.firstName.at(0)} {user.lastName.at(0)}
            </div>

            <div
              className={`absolute bottom-[-1px] translate-y-[-73px] left-1px w-6 h-6 flex items-center justify-center text-sm font-bold text-black rounded-full shadow-5xl ${
                index === 0
                  ? "bg-yellow-500"
                  : index === 1
                  ? "bg-gray-300"
                  : "bg-orange-700"
              }`}
            >
              {index + 1}
            </div>

            <span className="mt-4 font-bold ">{user.firstName}</span>
            <span className="text-sm text-gray-500">
              {user?.country ?? "Serbia"}
            </span>
            <span className="font-semibold text-yellow-500">
              🪙 {user.totalCoins}
            </span>
          </div>
        ))}
      </div>

      <ul className="w-full">
        {restUsers.map((user, index) => (
          <li
            key={user.id}
            className="grid grid-cols-3 items-center py-3 border-b text-center"
          >
            <span className="text-blue-500 font-bold">#{index + 4}</span>

            <div className="flex items-center justify-center space-x-6">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold"
                style={{
                  backgroundColor:
                    colors[Math.floor(Math.random() * colors.length)],
                }}
              >
                {user.firstName.at(0)} {user.lastName.at(0)}
              </div>
              <span className="font-semibold">{user.firstName}</span>
              <span className="text-sm text-gray-500">
                {user?.country ?? "Serbia"}
              </span>
            </div>

            <span className="font-semibold text-yellow-500">
              🪙 {user.totalCoins}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
