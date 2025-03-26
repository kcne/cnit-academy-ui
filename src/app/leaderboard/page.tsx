"use client"; // Obezbeđuje da je ovo klijentska komponenta

import Leaderboard from "@/app/components/Leaderbord"

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-10">Leaderboard</h1>
      <div className="flex justify-center space-x-4 mb-10">
        <button className="bg-yellow-400 px-4 py-2 rounded-full font-semibold">Progress Score</button>
        <button className="bg-white-200 px-4 py-2 rounded-full font-semibold">Community Score</button>
      </div>
      <Leaderboard
        users={[
          { id: "1", name: "Merve Okumuş Sarı", initials: "MS", totalCoins: 422, country: "Türkiye" },
          { id: "2", name: "Emre Akdeniz", initials: "EA", totalCoins: 284, country: "Türkiye" },
          { id: "3", name: "Hande Dan", initials: "HD", totalCoins: 272, country: "Türkiye" },
          { id: "4", name: "Dilan Acun", initials: "DA", totalCoins: 269, country: "Türkiye" },
          { id: "5", name: "Seyhan Özgür", initials: "SÖ", totalCoins: 250, country: "Türkiye" },
          { id: "6", initials: "AO", name: "Ahmet Orhan", country: "Türkiye", totalCoins: 230 },
          { id: "7", initials: "BY", name: "Burak Yılmaz", country: "Türkiye", totalCoins: 198 },
          { id: "8", initials: "CK", name: "Cem Karaca", country: "Türkiye", totalCoins: 176 },
          { id: "9", initials: "EZ", name: "Ece Zengin", country: "Türkiye", totalCoins: 150 },
          { id: "10", initials: "FK", name: "Fatih Kaya", country: "Türkiye", totalCoins: 120 }
        ]}
      />
    </div>
  );
}
