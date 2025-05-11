"use client";

import { User } from "@/app/providers/userContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProfilePage } from "../profilePage";
import { BASE_URL } from "@/app/providers/envConstants";

export default function ProfileWithId({ params }: { params: { id: number } }) {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    axios
      .get(BASE_URL + "/api/profile/" + params.id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen w-full p-4 pr-8 flex justify-center">
      <div className="w-full xl:w-3/4">
        <ProfilePage user={user} />
      </div>
    </div>
  );
}
