"use client";

import Form from "@/app/components/registerForm";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function RegisterPage() {
  return (
    <GoogleOAuthProvider clientId={process.env.OAUTH2_CLIENT_ID ?? ""}>
      <Form />
    </GoogleOAuthProvider>
  );
}
