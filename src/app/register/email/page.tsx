"use client";
import { useUser } from "@/app/context/userContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Page({}: Props) {
  const { verifyEmail, resendEmail } = useUser();
  const router = useRouter();
  const regex = /^\d{0,6}$/;

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [resend, setResend] = useState(false);

  useEffect(() => {
    if (!resend) {
      setTimeout(() => setResend(true), 1000 * 30);
    }
  }, [resend]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex items-center flex-col bg-white p-8 rounded-lg shadow-md w-max max-w-lg">
        <h1 className="font-bold text-3xl">Email verification</h1>
        <p className="m-2">
          Check your email and enter the code to continue to login.
        </p>
        <input
          className="w-28 tracking-wider bg-gray-100 px-2 py-1 mt-2 text-3xl"
          placeholder="xxxxxx"
          value={code}
          onChange={(e) => {
            if (regex.test(e.target.value)) {
              setCode(e.target.value);
            }
          }}
        />
        <div className="flex justify-between gap-4 mt-4">
          <button
            disabled={code.length !== 6}
            className="p-2 bg-blue-500 disabled:bg-gray-300 text-white font-bold rounded-lg h-10"
            onClick={() => {
              verifyEmail(Number(code))
                .then((res) => {
                  if (res) {
                    router.push("/login");
                  } else {
                    setError("Invalid code, please try again");
                  }
                })
                .catch((rej) => setError(rej.message));
            }}
          >
            VERIFY
          </button>
          <div>
            <button
              disabled={!resend}
              className="p-2 bg-blue-500 disabled:bg-gray-300 text-white font-bold rounded-lg h-10"
              onClick={() => {
                setResend(false);
                setCode("");
                resendEmail().catch((rej) => setError(rej.message));
              }}
            >
              RESEND
            </button>
            <p className="text-gray-500 text-sm text-center">30s delay</p>
          </div>
        </div>
        {error ? <p className="text-red-600">{error}</p> : <></>}
      </div>
    </div>
  );
}
