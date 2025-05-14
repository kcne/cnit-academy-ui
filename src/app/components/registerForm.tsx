"use client";

import { useState } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/providers/userContext";
import { BASE_URL } from "../providers/envConstants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const schema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters."),
  lastName: z.string().min(3, "Last name must be at least 3 characters."),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  pfp: z.any(),
});

type Inputs = z.infer<typeof schema>;

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { registerForm } = useUser();
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Inputs) => {
    setLoading(true);
    try {
      await registerForm(
        data.firstName,
        data.lastName,
        data.email,
        data.password,
        data.pfp[0],
      );
      router.push("/verify/" + encodeURIComponent(data.email));
      toast({
        title: "Registration successful!",
        description: "Thank you for registering!",
      })
    } catch (error) {
      console.error("Registration failed", error);
      toast({
        title: "Registration failed!",
        description: "Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              id="firstName"
              {...register("firstName")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              id="lastName"
              {...register("lastName")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

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

          <div className="mb-4">
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

          <div className="mb-6">
            <label
              htmlFor="profile picture"
              className="block text-sm font-medium text-gray-700"
            >
              Profile picture
            </label>
            <input
              id="pfp"
              type="file"
              {...register("pfp")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="pfp here"
            />
            {errors.pfp && (
              <p className="text-red-500 text-sm mt-1">
                {String(errors.pfp.message)}
              </p>
            )}
          </div>

          <Button className="w-full px-4 py-2">
            {loading ? "Loading..." : "Register"}
          </Button>
        </form>
        <div className="py-4">
          <button
            className="flex justify-between items-center h-10 w-full border rounded-md p-2"
            onClick={() => {
              setLoading(true);
              googleLogin();
            }}
          >
            <Image
              src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw"
              alt="G"
              className="h-5/6 aspect-square w-auto"
              width={200}
              height={200}
            />
            <span>Register using google</span>
            <span className="aspect-square h-full"></span>
          </button>
        </div>
        <p className="w-full text-center pt-3 text-sm">
          <Link href={"/login"}>Already have an account? Click here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
