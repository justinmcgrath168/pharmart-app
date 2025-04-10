/**
 * @file src/components/forms/signup/business-details-form.tsx
 * Business details form for the second step of signup process
 */
"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SignupData } from "@/lib/validators/signup";
import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { UploadButton } from "@/components/ui/upload-button";
import { useState } from "react";
import Image from "next/image";

const BUSINESS_TYPES = [
  { value: "independent", label: "Independent Pharmacy" },
  { value: "chain", label: "Chain Pharmacy" },
  { value: "hospital", label: "Hospital Pharmacy" },
  { value: "clinic", label: "Clinical Pharmacy" },
  { value: "specialty", label: "Specialty Pharmacy" },
  { value: "compounding", label: "Compounding Pharmacy" },
  { value: "other", label: "Other" },
];

const COUNTRIES = [
  { value: "cambodia", label: "Cambodia" },
  { value: "thailand", label: "Thailand" },
  { value: "vietnam", label: "Vietnam" },
  { value: "laos", label: "Laos" },
  { value: "myanmar", label: "Myanmar" },
];

const BusinessDetailsForm = () => {
  const form = useFormContext<SignupData>();
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <Card className="border-muted bg-muted/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-2 text-blue-600">
            <InfoIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Your business details will be used to set up your pharmacy
              storefront. Make sure all information is accurate and matches your
              business registration documents.
            </p>
          </div>
        </CardContent>
      </Card>

      <FormField
        control={form.control}
        name="businessName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Business Name</FormLabel>
            <FormControl>
              <Input placeholder="Your Pharmacy Name" {...field} />
            </FormControl>
            <FormDescription>
              This will be displayed on your storefront
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="businessType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Business Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {BUSINESS_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-4">
        <Label>Business Logo</Label>
        <div className="flex items-center gap-4">
          <div className="h-24 w-24 border rounded-md flex items-center justify-center bg-muted/30 overflow-hidden">
            {logoUrl ? (
              <Image
                src={logoUrl}
                width={1080}
                height={1080}
                alt="Business logo"
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="text-muted-foreground text-sm">No logo</span>
            )}
          </div>
          <UploadButton
            endpoint="businessLogo"
            onClientUploadComplete={(res) => {
              setLogoUrl(res?.[0]?.url || null);
              // Update form value
              form.setValue("businessLogo", res?.[0]?.url || "");
            }}
            onUploadError={(error: Error) => {
              console.error(error);
            }}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Recommended: Square image, at least 500x500px
        </p>
      </div>

      <div className="space-y-4">
        <Label>Business Address</Label>

        <FormField
          control={form.control}
          name="businessAddress.street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Pharmacy Street" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="businessAddress.city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessAddress.state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State/Province</FormLabel>
                <FormControl>
                  <Input placeholder="State or Province" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="businessAddress.postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="12345" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessAddress.country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value || "cambodia"}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <FormField
        control={form.control}
        name="businessDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Business Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell customers about your pharmacy..."
                className="min-h-24 resize-y"
                {...field}
              />
            </FormControl>
            <FormDescription>
              This will appear on your store page. Highlight your unique
              services and specialties.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

BusinessDetailsForm.displayName = "BusinessDetailsForm";

export default BusinessDetailsForm;
