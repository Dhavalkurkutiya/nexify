import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
    email: requiredString.email("Invalid email address"),
    username: requiredString.regex(
        /^[a-zA-Z0-9_]{1,15}$/,
        "Only letters, numbers, and -and _ allowed"
    ),
    password: requiredString.min(6, "Must be at least 6 characters"),
})

export type signUpValues = z.infer<typeof signUpSchema>;
export const loginSchema = z.object({
    username: requiredString,
    password: requiredString,
})

export type LoginValues = z.infer<typeof loginSchema>;