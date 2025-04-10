/**
 * @file src/components/forms/signup/pharmacy-details-form.tsx
 * Pharmacy details form for the third step of signup process
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
import { Checkbox } from "@/components/ui/checkbox";
import { SignupData } from "@/lib/validators/signup";
import { Card, CardContent } from "@/components/ui/card";
import { FileIcon, Calendar, ShieldAlert } from "lucide-react";
import { Label } from "@/components/ui/label";
import { UploadButton } from "@/components/ui/upload-button";
import { useState } from "react";
import { TimeInput } from "@/components/ui/time-input";
import { cn } from "@/lib/utils";

// Available pharmacy services
const PHARMACY_SERVICES = [
  { id: "prescription", label: "Prescription Filling" },
  { id: "delivery", label: "Medication Delivery" },
  { id: "consultation", label: "Pharmacist Consultation" },
  { id: "compounding", label: "Compounding Services" },
  { id: "vaccinations", label: "Vaccinations" },
  { id: "healthScreenings", label: "Health Screenings" },
  { id: "medicationTherapy", label: "Medication Therapy Management" },
  { id: "dmeSupplies", label: "DME Supplies" },
  { id: "homeCare", label: "Home Healthcare" },
  { id: "specialtyMeds", label: "Specialty Medications" },
];

// Days of the week
const DAYS_OF_WEEK = [
  { id: "monday", label: "Monday" },
  { id: "tuesday", label: "Tuesday" },
  { id: "wednesday", label: "Wednesday" },
  { id: "thursday", label: "Thursday" },
  { id: "friday", label: "Friday" },
  { id: "saturday", label: "Saturday" },
  { id: "sunday", label: "Sunday" },
];

const PharmacyDetailsForm = () => {
  const form = useFormContext<SignupData>();
  const [licenseFileUploaded, setLicenseFileUploaded] = useState(false);

  return (
    <div className="space-y-6">
      <Card className="border-muted bg-muted/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-2 text-purple-600">
            <ShieldAlert className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Pharmacy licensing information is required for legal compliance.
              All uploaded documents will be securely stored and reviewed by our
              team.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="pharmacyLicenseNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pharmacy License Number</FormLabel>
              <FormControl>
                <Input placeholder="License number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-2">
          <Label>Upload License Document</Label>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "h-12 min-w-40 flex items-center gap-2 border rounded-md px-3 py-2",
                licenseFileUploaded
                  ? "bg-green-50 border-green-200 text-green-600"
                  : "bg-muted/30 text-muted-foreground"
              )}
            >
              <FileIcon className="h-4 w-4" />
              <span className="text-sm truncate">
                {licenseFileUploaded
                  ? "license-document.pdf"
                  : "No file selected"}
              </span>
            </div>
            <UploadButton
              endpoint="licenseDocument"
              onClientUploadComplete={(res) => {
                setLicenseFileUploaded(true);
                // Update form value
                form.setValue("licenseDocument", res?.[0]?.url || "");
              }}
              onUploadError={(error: Error) => {
                console.error(error);
              }}
              allowedFileTypes={[".pdf", ".jpg", ".jpeg", ".png"]}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Accepted formats: PDF, JPG, PNG (max 5MB)
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="pharmacistInCharge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pharmacist in Charge</FormLabel>
              <FormControl>
                <Input placeholder="Full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pharmacistLicenseNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pharmacist License Number</FormLabel>
              <FormControl>
                <Input placeholder="License number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <Label>Operating Hours</Label>
        </div>

        <div className="space-y-4">
          {DAYS_OF_WEEK.map((day) => (
            <div key={day.id} className="flex items-center gap-4">
              <FormField
                control={form.control}
                name={`operatingHours.${day.id}.isOpen`}
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="min-w-20 font-normal">
                      {day.label}
                    </FormLabel>
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-2 flex-1">
                <FormField
                  control={form.control}
                  name={`operatingHours.${day.id}.open`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <TimeInput
                          value={field.value}
                          onChange={field.onChange}
                          disabled={
                            !form.watch(`operatingHours.${day.id}.isOpen`)
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <span className="text-muted-foreground mx-2">to</span>

                <FormField
                  control={form.control}
                  name={`operatingHours.${day.id}.close`}
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <TimeInput
                          value={field.value}
                          onChange={field.onChange}
                          disabled={
                            !form.watch(`operatingHours.${day.id}.isOpen`)
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label>Services Offered</Label>
        <div className="grid gap-3 sm:grid-cols-2">
          {PHARMACY_SERVICES.map((service) => (
            <FormField
              key={service.id}
              control={form.control}
              name="servicesOffered"
              render={({ field }) => (
                <FormItem
                  key={service.id}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(service.id)}
                      onCheckedChange={(checked) => {
                        const updatedServices = checked
                          ? [...(field.value || []), service.id]
                          : (field.value || []).filter(
                              (value) => value !== service.id
                            );
                        field.onChange(updatedServices);
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{service.label}</FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>
        <FormDescription>
          Select all services your pharmacy offers. These will be displayed on
          your store page.
        </FormDescription>
        <FormMessage />
      </div>
    </div>
  );
};

PharmacyDetailsForm.displayName = "PharmacyDetailsForm";

export default PharmacyDetailsForm;
