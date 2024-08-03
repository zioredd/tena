import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be atleast 2 characters.")
    .max(50, "Name must be atmost 50 characters."),
  email: z.string().email("Invalid email address."),
  phone: z
    .string()
    .refine(
      (phone) => /^\+[1-9]\d{1,14}$/.test(phone),
      "Invalid phone number."
    ),
});
