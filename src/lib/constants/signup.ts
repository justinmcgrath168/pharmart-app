/**
 * @file src/lib/constants/signup.ts
 * Constants for the signup process
 */

// Define steps for the signup wizard
export const signUpSteps = [
  {
    id: "account",
    title: "Account Details",
    description: "Create your admin account for accessing Pharmart",
    fieldsToValidate: [
      "email",
      "password",
      "confirmPassword",
      "fullName",
      "phoneNumber",
    ],
  },
  {
    id: "business",
    title: "Business Information",
    description: "Tell us about your pharmacy business",
    fieldsToValidate: [
      "businessName",
      "businessType",
      "businessAddress.street",
      "businessAddress.city",
      "businessAddress.state",
      "businessAddress.postalCode",
      "businessAddress.country",
    ],
  },
  {
    id: "pharmacy",
    title: "Pharmacy Details",
    description: "Provide your pharmacy licensing and operational information",
    fieldsToValidate: [
      "pharmacyLicenseNumber",
      "pharmacistInCharge",
      "pharmacistLicenseNumber",
    ],
  },
  {
    id: "subscription",
    title: "Choose Your Plan",
    description: "Select a subscription plan that fits your needs",
    fieldsToValidate: ["subscriptionPlan"],
  },
  {
    id: "review",
    title: "Review Information",
    description: "Review your information and complete registration",
    fieldsToValidate: ["acceptTerms"],
  },
];
