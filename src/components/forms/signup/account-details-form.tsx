/**
 * @file src/components/forms/signup/account-details-form.tsx
 * Account details form for the first step of signup process
 */
"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { SignupData } from "@/lib/validators/signup";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { useState } from "react";
import { PasswordStrengthIndicator } from "@/components/ui/password-strength";

const AccountDetailsForm = () => {
  const form = useFormContext<SignupData>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-6">
      <Card className="border-muted bg-muted/30">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 text-amber-600">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm">
              Your account details will be used to manage your Pharmart admin
              panel access.
            </p>
          </div>
        </CardContent>
      </Card>

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input
                placeholder="you@example.com"
                type="email"
                autoComplete="email"
                {...field}
              />
            </FormControl>
            <FormDescription>
              We&apos;ll send you verification email to this address
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  autoComplete="tel"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  placeholder="Create a secure password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  className="pr-10"
                  {...field}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </FormControl>
            <PasswordStrengthIndicator password={field.value} />
            <FormDescription>
              Password must contain at least 8 characters, including uppercase,
              lowercase, numbers, and special characters
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  placeholder="Confirm your password"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  className="pr-10"
                  {...field}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

AccountDetailsForm.displayName = "AccountDetailsForm";

export default AccountDetailsForm;
