/**
 * @file src/components/forms/signup/business-details-form.tsx
 * Updated business details form for the second step of signup process
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
import { Label } from "@/components/ui/label";
import { UploadButton } from "@/components/ui/upload-button";
import { useState, useEffect } from "react";
import { InfoIcon, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BUSINESS_TYPES,
  PROVINCES,
  DISTRICTS,
  COMMUNES,
  VILLAGES,
} from "@/lib/constants/signup";
import Image from "next/image";

const BusinessDetailsForm = () => {
  const form = useFormContext<SignupData>();
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  // For dependent dropdowns
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedCommune, setSelectedCommune] = useState<string>("");

  // Generate subdomain from business name
  useEffect(() => {
    const businessName = form.watch("businessName");
    if (businessName && !form.getValues("subdomain")) {
      const subdomain = businessName
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-")
        .trim();

      // Ensure it starts with an alphanumeric character
      const sanitizedSubdomain = /^[a-z0-9]/.test(subdomain)
        ? subdomain
        : `pharm-${subdomain}`;

      form.setValue("subdomain", sanitizedSubdomain);
    }
  }, [form.watch("businessName")]);

  // Update dependent dropdowns
  useEffect(() => {
    const province = form.watch("businessAddress.province");
    if (province !== selectedProvince) {
      setSelectedProvince(province);
      form.setValue("businessAddress.district", "");
      form.setValue("businessAddress.commune", "");
      form.setValue("businessAddress.village", "");
      setSelectedDistrict("");
      setSelectedCommune("");
    }
  }, [form.watch("businessAddress.province")]);

  useEffect(() => {
    const district = form.watch("businessAddress.district");
    if (district !== selectedDistrict) {
      setSelectedDistrict(district);
      form.setValue("businessAddress.commune", "");
      form.setValue("businessAddress.village", "");
      setSelectedCommune("");
    }
  }, [form.watch("businessAddress.district")]);

  useEffect(() => {
    const commune = form.watch("businessAddress.commune");
    if (commune !== selectedCommune) {
      setSelectedCommune(commune);
      form.setValue("businessAddress.village", "");
    }
  }, [form.watch("businessAddress.commune")]);

  return (
    <div className="space-y-6">
      {/* Business Basic Information */}
      <div className="space-y-4 py-2">
        {/* Business Logo */}
        <div className="space-y-2">
          <Label>Business Logo</Label>
          <div className="flex items-center gap-4">
            <div className="h-24 w-24 border rounded-md flex items-center justify-center bg-muted/30 overflow-hidden">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt="Business logo"
                  className="h-full w-full object-contain"
                  width={1080}
                  height={1080}
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
          <p className="text-xs text-muted-foreground">
            Upload your pharmacy logo (JPG, PNG, SVG). Maximum size: 2MB.
          </p>
        </div>

        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Pharmacy Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
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

          <FormField
            control={form.control}
            name="businessLicenseNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business License Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your pharmacy license number"
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
              {/* <FormDescription>
                Optional. Describe your pharmacy&pos;s services, specialties,
                and unique features.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Domain Information */}
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="subdomain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subdomain</FormLabel>
              <FormControl>
                <div className="flex items-center">
                  <Input
                    placeholder="yourpharmacy"
                    className="rounded-r-none"
                    {...field}
                  />
                  <div className="bg-muted px-3 py-2 text-sm border border-l-0 border-input rounded-r-md text-muted-foreground">
                    .pharmart.app
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                This will be your pharmacy&apos;s unique web address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="businessPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="078896800"
                    type="tel"
                    inputMode="numeric"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="business@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* Address Information */}
      <div className="space-y-4 pb-4">
        <h3 className="text-base font-medium">Business Address</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="businessAddress.province"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Province/City</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select province/city" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PROVINCES.map((province) => (
                      <SelectItem key={province.value} value={province.value}>
                        {province.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessAddress.district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>District</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={!selectedProvince}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          selectedProvince
                            ? "Select district"
                            : "Select province first"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {selectedProvince &&
                      DISTRICTS[
                        selectedProvince as keyof typeof DISTRICTS
                      ]?.map((district) => (
                        <SelectItem key={district.value} value={district.value}>
                          {district.label}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessAddress.commune"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Commune</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={!selectedDistrict}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          selectedDistrict
                            ? "Select commune"
                            : "Select district first"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {selectedDistrict &&
                      COMMUNES[selectedDistrict as keyof typeof COMMUNES]?.map(
                        (commune) => (
                          <SelectItem key={commune.value} value={commune.value}>
                            {commune.label}
                          </SelectItem>
                        )
                      )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessAddress.village"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Village</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={!selectedCommune}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          selectedCommune
                            ? "Select village"
                            : "Select commune first"
                        }
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {selectedCommune &&
                      VILLAGES[selectedCommune as keyof typeof VILLAGES]?.map(
                        (village) => (
                          <SelectItem key={village.value} value={village.value}>
                            {village.label}
                          </SelectItem>
                        )
                      )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="businessAddress.streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your detailed street address, building number, floor, etc."
                  className="resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

BusinessDetailsForm.displayName = "BusinessDetailsForm";

export default BusinessDetailsForm;
