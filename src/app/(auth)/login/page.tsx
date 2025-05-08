"use client";

import Form from "@/app/components/loginForm";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function LoginPage() {
  return (
    <GoogleOAuthProvider clientId={process.env.OAUTH2_CLIENT_ID ?? ""}>
      <Form />
    </GoogleOAuthProvider>
  );
}
