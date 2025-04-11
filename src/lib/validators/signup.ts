/**
 * @file src/lib/validators/signup.ts
 * Updated validation schema for the 3-step signup process
 */
import { z } from "zod";

// Regex for validation
const PHONE_REGEX =
  /^(\+\d{1,3})?\s?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const SUBDOMAIN_REGEX = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;

// Business address schema
const businessAddressSchema = z.object({
  province: z.string().min(1, "Province is required"),
  district: z.string().min(1, "District is required"),
  commune: z.string().min(1, "Commune is required"),
  village: z.string().min(1, "Village is required"),
  streetAddress: z.string().min(1, "Street address is required"),
});

// Main signup schema
export const signupSchema = z
  .object({
    // Step 1: User Account Information
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        PASSWORD_REGEX,
        "Password must include uppercase, lowercase, number, and special character"
      ),
    confirmPassword: z.string(),

    // Step 2: Business Information
    businessName: z.string().min(2, "Business name is required"),
    businessType: z.string(),
    businessDescription: z.string().optional(),
    businessLicenseNumber: z.string().optional(),
    subdomain: z
      .string()
      .min(3, "Subdomain must be at least 3 characters")
      .max(63, "Subdomain cannot exceed 63 characters")
      .regex(
        SUBDOMAIN_REGEX,
        "Subdomain can only contain lowercase letters, numbers, and hyphens. It cannot start or end with a hyphen."
      ),
    businessPhone: z
      .string()
      .regex(PHONE_REGEX, "Please enter a valid phone number"),
    businessEmail: z
      .string()
      .email("Please enter a valid business email address"),
    businessAddress: businessAddressSchema,
    businessLogo: z.string().optional(),

    // Step 3: Subscription Plan
    subscriptionPlan: z.string().min(1, "Please select a subscription plan"),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Export type based on schema
export type SignupData = z.infer<typeof signupSchema>;
