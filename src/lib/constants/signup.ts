/**
 * @file src/lib/constants/signup.ts
 * Updated constants for the 3-step signup process
 */

// Define steps for the signup wizard
export const signUpSteps = [
  {
    id: "account",
    title: "Account Information",
    description: "Create your account to manage your pharmacy on Pharmart",
    fieldsToValidate: ["fullName", "email", "password", "confirmPassword"],
  },
  {
    id: "business",
    title: "Business Information",
    description: "Tell us about your pharmacy business",
    fieldsToValidate: [
      "businessName",
      "businessType",
      "subdomain",
      "businessPhone",
      "businessEmail",
      "businessAddress.province",
      "businessAddress.district",
      "businessAddress.commune",
      "businessAddress.village",
      "businessAddress.streetAddress",
    ],
  },
  {
    id: "subscription",
    title: "Choose Your Plan",
    description: "Select a subscription plan and complete your registration",
    fieldsToValidate: ["subscriptionPlan", "acceptTerms"],
  },
];

// Business types
export const BUSINESS_TYPES = [
  { value: "independent", label: "Independent Pharmacy" },
  { value: "chain", label: "Chain Pharmacy" },
  { value: "franchise", label: "Franchise Pharmacy" },
  { value: "hospital", label: "Hospital Pharmacy" },
  { value: "clinic", label: "Clinical Pharmacy" },
  { value: "specialty", label: "Specialty Pharmacy" },
];

// Subscription plans
export const SUBSCRIPTION_PLANS = [
  {
    id: "basic",
    title: "Basic",
    price: "$29",
    billingPeriod: "per month",
    description: "Essential tools for small independent pharmacies",
    features: [
      "Online store with up to 500 products",
      "Basic inventory management",
      "Standard POS system",
      "Email support",
      "Mobile responsive storefront",
      "Basic analytics and reporting",
    ],
    recommended: false,
  },
  {
    id: "premium",
    title: "Premium",
    price: "$79",
    billingPeriod: "per month",
    description: "Advanced tools for growing pharmacies",
    features: [
      "Online store with unlimited products",
      "Advanced inventory management",
      "Full-featured POS system",
      "Priority email and chat support",
      "Custom domain name",
      "Advanced analytics and reporting",
      "Multi-staff accounts",
      "Prescription refill reminders",
      "Customer loyalty program",
    ],
    recommended: true,
  },
];

// Cambodian provinces
export const PROVINCES = [
  { value: "phnom_penh", label: "Phnom Penh" },
  { value: "battambang", label: "Battambang" },
  { value: "siem_reap", label: "Siem Reap" },
  { value: "kampong_cham", label: "Kampong Cham" },
  { value: "kandal", label: "Kandal" },
  { value: "prey_veng", label: "Prey Veng" },
  { value: "takeo", label: "Takeo" },
  { value: "banteay_meanchey", label: "Banteay Meanchey" },
  { value: "kampong_thom", label: "Kampong Thom" },
  { value: "kampot", label: "Kampot" },
  { value: "preah_vihear", label: "Preah Vihear" },
  { value: "pursat", label: "Pursat" },
  { value: "ratanakiri", label: "Ratanakiri" },
  { value: "svay_rieng", label: "Svay Rieng" },
  { value: "kampong_speu", label: "Kampong Speu" },
  { value: "mondulkiri", label: "Mondulkiri" },
  { value: "oddar_meanchey", label: "Oddar Meanchey" },
  { value: "koh_kong", label: "Koh Kong" },
  { value: "kep", label: "Kep" },
  { value: "pailin", label: "Pailin" },
  { value: "stung_treng", label: "Stung Treng" },
  { value: "preah_sihanouk", label: "Preah Sihanouk" },
  { value: "kampong_chhnang", label: "Kampong Chhnang" },
  { value: "kratie", label: "Kratie" },
  { value: "tbong_khmum", label: "Tbong Khmum" },
];

// Sample districts for Phnom Penh (in a real app, this would be dynamic based on province selection)
export const DISTRICTS = {
  phnom_penh: [
    { value: "chamkarmon", label: "Chamkar Mon" },
    { value: "daun_penh", label: "Daun Penh" },
    { value: "7_makara", label: "7 Makara" },
    { value: "tuol_kork", label: "Tuol Kork" },
    { value: "dangkao", label: "Dangkao" },
    { value: "mean_chey", label: "Mean Chey" },
    { value: "russey_keo", label: "Russey Keo" },
    { value: "sen_sok", label: "Sen Sok" },
    { value: "por_senchey", label: "Por Senchey" },
    { value: "chroy_changvar", label: "Chroy Changvar" },
    { value: "prek_pnov", label: "Prek Pnov" },
    { value: "chbar_ampov", label: "Chbar Ampov" },
    { value: "boeng_keng_kang", label: "Boeng Keng Kang" },
    { value: "kamboul", label: "Kamboul" },
  ],
  // Add more districts for other provinces as needed
};

// Sample communes (simplified for demo - would be dynamic in a real app)
export const COMMUNES = {
  chamkarmon: [
    { value: "tonle_bassac", label: "Tonle Bassac" },
    { value: "boeung_keng_kang_1", label: "Boeung Keng Kang 1" },
    { value: "boeung_keng_kang_2", label: "Boeung Keng Kang 2" },
    { value: "boeung_keng_kang_3", label: "Boeung Keng Kang 3" },
    { value: "olympic", label: "Olympic" },
    { value: "tuol_svay_prey_1", label: "Tuol Svay Prey 1" },
    { value: "tuol_svay_prey_2", label: "Tuol Svay Prey 2" },
    { value: "tumnop_teuk", label: "Tumnop Teuk" },
  ],
  // Add more communes for other districts as needed
};

// Sample villages (simplified for demo - would be dynamic in a real app)
export const VILLAGES = {
  tonle_bassac: [
    { value: "village_1", label: "Village 1" },
    { value: "village_2", label: "Village 2" },
    { value: "village_3", label: "Village 3" },
    { value: "village_4", label: "Village 4" },
  ],
  // Add more villages for other communes as needed
};
