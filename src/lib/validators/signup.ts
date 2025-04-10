/**
 * @file src/lib/validators/signup.ts
 * Validation schema for signup form data
 */
import { z } from "zod";

// Regex for validation
const PHONE_REGEX =
  /^(\+\d{1,3})?\s?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const TIME_REGEX = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

// Operating hours schema
const operatingHoursSchema = z.object({
  isOpen: z.boolean(),
  open: z.string().regex(TIME_REGEX, "Invalid time format").optional(),
  close: z.string().regex(TIME_REGEX, "Invalid time format").optional(),
});

// Business address schema
const businessAddressSchema = z.object({
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
});

// Main signup schema
export const signupSchema = z
  .object({
    // Step 1: Account Details
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        PASSWORD_REGEX,
        "Password must include uppercase, lowercase, number, and special character"
      ),
    confirmPassword: z.string(),
    fullName: z.string().min(2, "Full name is required"),
    phoneNumber: z
      .string()
      .regex(PHONE_REGEX, "Please enter a valid phone number"),

    // Step 2: Business Details
    businessName: z.string().min(2, "Business name is required"),
    businessType: z.string(),
    businessDescription: z.string().optional(),
    businessLogo: z.string().optional(),
    businessAddress: businessAddressSchema,

    // Step 3: Pharmacy Details
    pharmacyLicenseNumber: z.string().min(1, "License number is required"),
    licenseDocument: z.string().optional(),
    pharmacistInCharge: z.string().min(1, "Pharmacist name is required"),
    pharmacistLicenseNumber: z
      .string()
      .min(1, "Pharmacist license number is required"),
    operatingHours: z.object({
      monday: operatingHoursSchema,
      tuesday: operatingHoursSchema,
      wednesday: operatingHoursSchema,
      thursday: operatingHoursSchema,
      friday: operatingHoursSchema,
      saturday: operatingHoursSchema,
      sunday: operatingHoursSchema,
    }),
    servicesOffered: z.array(z.string()).optional(),

    // Step 4: Subscription Plan
    subscriptionPlan: z.string().min(1, "Please select a subscription plan"),

    // Step 5: Terms and Conditions
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
