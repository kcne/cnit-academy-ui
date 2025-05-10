"use client";

import Image from "next/image";
import { User } from "@/app/providers/userContext";
import { useEffect, useState } from "react";
import { Coins, Flame } from "lucide-react";
import axios from "axios";
import { BASE_URL } from "@/app/providers/envConstants";

const DEFAULT_PFP = BASE_URL + "/files/pfp/default.png";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function ProfilePage({ params }: { params: { id: number } }) {
  const [user, setUser] = useState<User | null>(null);

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
        <div className="flex flex-col sm:flex-row gap-4 bg-white p-6 rounded-lg shadow-lg items-center w-full">
          <Image
            src={user?.pfp ?? DEFAULT_PFP}
            width={100}
            height={100}
            alt="Profile"
            className="rounded-full aspect-square h-full"
          />
          <div className="relative">
            <h2 className="text-2xl font-bold">
              {user?.firstName} {user?.lastName}
            </h2>
            <div className="w-max">
              <p className="text-sm text-gray-500">{user?.email}</p>
              <p className="flex gap-2 mt-2 w-full justify-evenly">
                <span className="text-yellow-500 flex">
                  <Coins /> {user?.totalCoins}
                </span>
                <span className="text-red-500 flex">
                  <Flame /> {user?.streak}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          {/* Skills Card */}
          <div className={"bg-white p-2 px-4 rounded-lg shadow-lg"}>
            <h3 className={"text-lg font-semibold"}>Skills</h3>
            <div className="flex gap-2 min-h-9 pt-1">
              {user?.skills.map((el, i) => (
                <span key={i} className="bg-gray-200 p-1 px-2 rounded-xl h-min">
                  {el}
                </span>
              ))}
            </div>
          </div>

          {/* Badges Card */}
          <div className={"bg-white p-2 px-4 rounded-lg shadow-lg"}>
            <h3 className={"text-lg font-semibold"}>Badges</h3>
            <div className="flex gap-2 min-h-9 pt-1">
              {user?.badges.length ? (
                <>
                  {user?.badges.map((el, i) => (
                    <div
                      key={i}
                      className="min-w-10 max-w-20 overflow-x-auto flex flex-col items-center justify-between"
                    >
                      <Image
                        width={32}
                        height={32}
                        src={el.icon}
                        alt={el.title}
                      ></Image>
                      <span className="text-xs text-center">{el.title}</span>
                      <span></span>
                    </div>
                  ))}
                </>
              ) : (
                <p className="text-gray-500"> No badges yet!</p>
              )}
            </div>
          </div>

          {/* Education Card */}
          <div className={"bg-white p-4 rounded-lg shadow-lg"}>
            <h3 className={"text-lg font-bold"}>Education</h3>
            <div>
              {user?.education.map((el) => (
                <div key={el.id} className="m-2 mt-3">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{el.organization}</h2>
                    <span className="text-gray-600">
                      {MONTHS[new Date(el.startPeriod).getMonth()]}&nbsp;
                      {new Date(el.startPeriod).getFullYear()} -&nbsp;
                      {MONTHS[new Date(el.endPeriod).getMonth()]}&nbsp;
                      {new Date(el.endPeriod).getFullYear()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 -mt-0.5 mb-1">
                    {el.title}
                  </p>
                  <p>{el.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Job Card */}
          <div className={"bg-white p-4 rounded-lg shadow-lg"}>
            <h3 className={"text-lg font-semibold"}>Job Experience</h3>
            <div>
              {user?.experience.map((el) => (
                <div key={el.id} className="m-2 mt-3">
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{el.organization}</h2>
                    <span className="text-gray-600">
                      {MONTHS[new Date(el.startPeriod).getMonth()]}&nbsp;
                      {new Date(el.startPeriod).getFullYear()} -&nbsp;
                      {MONTHS[new Date(el.endPeriod).getMonth()]}&nbsp;
                      {new Date(el.endPeriod).getFullYear()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 -mt-0.5 mb-1">
                    {el.title}
                  </p>
                  <p>{el.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
