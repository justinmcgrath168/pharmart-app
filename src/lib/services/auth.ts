/**
 * @file src/lib/services/auth.ts
 * Updated authentication service for the 3-step signup process
 */
import { SignupData } from "../validators/signup";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Create a new user account and related business profile
 * @param data - Signup form data
 * @returns Promise with user data or error
 */
export async function createUserAccount(data: SignupData): Promise<any> {
  try {
    // Step 1: Create the user authentication account
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.fullName,
        },
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });

    if (authError) {
      throw new Error(authError.message);
    }

    if (!authData.user) {
      throw new Error("Failed to create user account");
    }

    // Step 2: Create the business profile in the database
    const { error: profileError } = await supabase
      .from("business_profiles")
      .insert({
        user_id: authData.user.id,
        business_name: data.businessName,
        business_type: data.businessType,
        business_description: data.businessDescription || "",
        business_license_number: data.businessLicenseNumber || "",
        business_logo: data.businessLogo || null,
        business_phone: data.businessPhone,
        business_email: data.businessEmail,
        business_address: {
          province: data.businessAddress.province,
          district: data.businessAddress.district,
          commune: data.businessAddress.commune,
          village: data.businessAddress.village,
          street_address: data.businessAddress.streetAddress,
        },
        subdomain: data.subdomain,
        subscription_plan: data.subscriptionPlan,
        is_verified: false, // Default to false until admin verification
        trial_ends_at: new Date(
          Date.now() + 14 * 24 * 60 * 60 * 1000
        ).toISOString(), // 14 days from now
        created_at: new Date().toISOString(),
      });

    if (profileError) {
      // Log the error for debugging
      console.error("Profile creation error:", profileError);

      // Attempt to clean up auth user if profile creation fails
      await supabase.auth.admin.deleteUser(authData.user.id);
      throw new Error(
        `Failed to create business profile: ${profileError.message}`
      );
    }

    return authData.user;
  } catch (error: any) {
    console.error("Signup error:", error);
    throw new Error(error.message || "An error occurred during signup");
  }
}

/**
 * Handle user login with email and password
 * @param email - User email
 * @param password - User password
 * @returns Promise with user session or error
 */
export async function loginUser(email: string, password: string): Promise<any> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error: any) {
    console.error("Login error:", error);
    throw new Error(error.message || "An error occurred during login");
  }
}

/**
 * Log out the current user
 * @returns Promise with success or error
 */
export async function logoutUser(): Promise<void> {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
  } catch (error: any) {
    console.error("Logout error:", error);
    throw new Error(error.message || "An error occurred during logout");
  }
}

/**
 * Send password reset email
 * @param email - User's email address
 * @returns Promise with success or error
 */
export async function resetPassword(email: string): Promise<void> {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error: any) {
    console.error("Password reset error:", error);
    throw new Error(
      error.message || "An error occurred while sending reset email"
    );
  }
}

/**
 * Update user's password
 * @param newPassword - New password
 * @returns Promise with success or error
 */
export async function updatePassword(newPassword: string): Promise<void> {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error: any) {
    console.error("Update password error:", error);
    throw new Error(
      error.message || "An error occurred while updating password"
    );
  }
}

/**
 * Get the current authenticated user
 * @returns Promise with user data or null
 */
export async function getCurrentUser() {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      return null;
    }
    return data?.user || null;
  } catch (error) {
    console.error("Get current user error:", error);
    return null;
  }
}

/**
 * Resend verification email
 * @param email - User's email address
 * @returns Promise with success or error
 */
export async function resendVerification(email: string): Promise<void> {
  try {
    const { error } = await supabase.auth.resend({
      type: "signup",
      email: email,
      options: {
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error: any) {
    console.error("Resend verification error:", error);
    throw new Error(
      error.message || "An error occurred while resending verification email"
    );
  }
}
