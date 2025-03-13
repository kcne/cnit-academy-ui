import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Sifra mora imati najamanje 6 karaktera." }),
});

export const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Sifra mora imati najamanje 6 karaktera." }),
  username: z.string().min(3, { message: "Username mora imati najmanje 3 karaktera" }),
});
