"use client";

import Leaderboard from "@/app/components/Leaderbord";
import { useLeaderboard } from "@/api/hooks/useLeaderboard";
import { useTranslation } from "react-i18next";

export default function LeaderboardPage() {
  const { t } = useTranslation();
  const { data, isLoading, error } = useLeaderboard();

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-10">{t("leaderboard.title")}</h1>
        <div className="flex justify-center space-x-4 mb-10">
          <button className="bg-yellow-400 px-4 py-2 rounded-full font-semibold">
            {t("leaderboard.progress")}
          </button>
          <button className="bg-white-200 px-4 py-2 rounded-full font-semibold">
            {t("leaderboard.community")}
          </button>
        </div>
        <div>{t("leaderboard.loading")}...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-10">{t("leaderboard.title")}</h1>
        <div className="flex justify-center space-x-4 mb-10">
          <button className="bg-yellow-400 px-4 py-2 rounded-full font-semibold">
            {t("leaderboard.progress")}
          </button>
          <button className="bg-white-200 px-4 py-2 rounded-full font-semibold">
            {t("leaderboard.community")}
          </button>
        </div>
        <div>{t("leaderboard.error")}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-10">{t("leaderboard.title")}</h1>
      <div className="flex justify-center space-x-4 mb-10">
        <button className="bg-yellow-400 px-4 py-2 rounded-full font-semibold">
          {t("leaderboard.progress")}
        </button>
        <button className="bg-white-200 px-4 py-2 rounded-full font-semibold">
          {t("leaderboard.community")}
        </button>
      </div>
      <Leaderboard users={data ?? []} />
    </div>
  );
}
