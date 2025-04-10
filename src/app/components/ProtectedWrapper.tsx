"use client"; 
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedWrapper : React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  if (!token) {
    router.push("/");
  }
  return children;
};

export default ProtectedWrapper ;
