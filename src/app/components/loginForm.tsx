"use client";

import { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { BASE_URL, useUser } from "@/app/providers/userContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email(),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
});

type Inputs = z.infer<typeof schema>;

const Form = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter(); // Koristi useRouter
  const { login } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async ({ code }) => {
      const { token } = (
        await axios.post(BASE_URL + "/api/auth/google", { code })
      ).data;
      localStorage.setItem("authToken", token);
      setLoading(false);
      router.push("/");
    },
  });

  const onSubmit = async (data: Inputs) => {
    setLoading(true);
    const { email, password } = data;

    try {
      await login(email, password);
      router.push("/");
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">User Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button className="w-full px-4 py-2">
            {loading ? "Loading..." : "Login"}
          </Button>
          {/* <button */}
          {/*   type="submit" */}
          {/*   className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" */}
          {/*   disabled={loading} */}
          {/* > */}
          {/*   {loading ? "Loading..." : "Login"} */}
          {/* </button> */}
        </form>
        <div className="py-4">
          <button
            className="flex justify-between items-center h-10 w-full border rounded-md p-2"
            onClick={() => {
              setLoading(true);
              googleLogin();
            }}
          >
            <img
              src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw"
              alt="G"
              className="h-5/6"
            />
            <span>Login using google</span>
            <span className="aspect-square h-full"></span>
          </button>
        </div>
        <p className="w-full text-center pt-3 text-sm">
          <Link href={"/register"}>Don't have an account? Click here</Link>
        </p>
      </div>
    </div>
  );
};

export default Form;
