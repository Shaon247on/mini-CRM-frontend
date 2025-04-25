import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  photo: z.string().optional(),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password should contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password should contain at least one number" }),
  role: z.enum(["freelancer", "client"], {
    required_error: "Role is required",
  }),
});
