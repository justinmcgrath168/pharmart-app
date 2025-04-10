/**
 * @file src/components/forms/signup/review-information-form.tsx
 * Review information component for the final step of signup process
 */
"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { SignupData } from "@/lib/validators/signup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { User, Building2, Calendar, Shield, CreditCard } from "lucide-react";

// Map subscription plan IDs to readable names
const PLAN_DISPLAY_NAMES = {
  basic: "Basic Plan",
  professional: "Professional Plan",
  enterprise: "Enterprise Plan",
};

const ReviewInformationForm = () => {
  const form = useFormContext<SignupData>();
  const formData = form.getValues();

  const getOperatingHoursDisplay = (day: string) => {
    const dayData =
      formData.operatingHours[day as keyof typeof formData.operatingHours];
    if (!dayData.isOpen) return "Closed";
    return `${dayData.open} - ${dayData.close}`;
  };

  const getServicesDisplay = () => {
    if (!formData.servicesOffered || formData.servicesOffered.length === 0) {
      return "No services selected";
    }

    return formData.servicesOffered.join(", ");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="h-5 w-5 text-muted-foreground" />
              Account Information
            </CardTitle>
            <Badge variant="outline" className="text-muted-foreground">
              Step 1
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid gap-1">
            <p className="text-sm font-medium">Email Address</p>
            <p className="text-sm text-muted-foreground">{formData.email}</p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Full Name</p>
            <p className="text-sm text-muted-foreground">{formData.fullName}</p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Phone Number</p>
            <p className="text-sm text-muted-foreground">
              {formData.phoneNumber || "Not provided"}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg flex items-center gap-2">
              <Building2 className="h-5 w-5 text-muted-foreground" />
              Business Information
            </CardTitle>
            <Badge variant="outline" className="text-muted-foreground">
              Step 2
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid gap-1">
            <p className="text-sm font-medium">Business Name</p>
            <p className="text-sm text-muted-foreground">
              {formData.businessName}
            </p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Business Type</p>
            <p className="text-sm text-muted-foreground capitalize">
              {formData.businessType?.replace("-", " ")}
            </p>
          </div>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Business Address</p>
            <p className="text-sm text-muted-foreground">
              {formData.businessAddress.street}, {formData.businessAddress.city}
              , {formData.businessAddress.state},{" "}
              {formData.businessAddress.postalCode},{" "}
              {formData.businessAddress.country}
            </p>
          </div>
          {formData.businessDescription && (
            <div className="grid gap-1">
              <p className="text-sm font-medium">Business Description</p>
              <p className="text-sm text-muted-foreground">
                {formData.businessDescription}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              Pharmacy Details
            </CardTitle>
            <Badge variant="outline" className="text-muted-foreground">
              Step 3
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <p className="text-sm font-medium">Pharmacy License Number</p>
              <p className="text-sm text-muted-foreground">
                {formData.pharmacyLicenseNumber}
              </p>
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium">License Document</p>
              <p className="text-sm text-muted-foreground">
                {formData.licenseDocument ? "✓ Uploaded" : "Not uploaded"}
              </p>
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium">Pharmacist in Charge</p>
              <p className="text-sm text-muted-foreground">
                {formData.pharmacistInCharge}
              </p>
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-medium">Pharmacist License Number</p>
              <p className="text-sm text-muted-foreground">
                {formData.pharmacistLicenseNumber}
              </p>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <p className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Operating Hours
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {Object.keys(formData.operatingHours).map((day) => (
                <div key={day} className="flex justify-between">
                  <p className="text-sm capitalize">{day}</p>
                  <p className="text-sm text-muted-foreground">
                    {getOperatingHoursDisplay(day)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <p className="text-sm font-medium">Services Offered</p>
            <p className="text-sm text-muted-foreground">
              {getServicesDisplay()}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-muted-foreground" />
              Subscription Plan
            </CardTitle>
            <Badge variant="outline" className="text-muted-foreground">
              Step 4
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">Selected Plan</p>
              <Badge variant="secondary">14-Day Free Trial</Badge>
            </div>
            <Badge>
              {formData.subscriptionPlan
                ? PLAN_DISPLAY_NAMES[
                    formData.subscriptionPlan as keyof typeof PLAN_DISPLAY_NAMES
                  ]
                : "No plan selected"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Separator />

      <FormField
        control={form.control}
        name="acceptTerms"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Terms and Conditions</FormLabel>
              <FormDescription>
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-primary underline underline-offset-4"
                  target="_blank"
                >
                  terms of service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-primary underline underline-offset-4"
                  target="_blank"
                >
                  privacy policy
                </Link>
                .
              </FormDescription>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

ReviewInformationForm.displayName = "ReviewInformationForm";

export default ReviewInformationForm;
