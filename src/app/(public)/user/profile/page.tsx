"use client";

// import Image from "next/image";
import { useUser } from "@/app/providers/userContext";
import { useEffect } from "react";
import { ProfilePage } from "./profilePage";

export default function MyProfile() {
  const { user, fetchUserInfo } = useUser();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen w-full p-4 pr-8 flex justify-center">
      <div className="w-full xl:w-3/4">
        <ProfilePage user={user} />
      </div>
    </div>
  );
}
