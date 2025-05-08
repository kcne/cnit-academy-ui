"use client";

import Form from "@/app/components/registerForm";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function RegisterPage() {
  return (
    <GoogleOAuthProvider clientId="949948282254-510vhq0l1ouh63ussgb5af1ne0uc07lr.apps.googleusercontent.com">
      <Form />
    </GoogleOAuthProvider>
  );
}

