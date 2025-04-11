/**
 * @file src/app/(auth)/signup/page.tsx
 * Updated signup page for the split-screen layout
 */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { signUpSteps } from "@/lib/constants/signup";
import { SignupData, signupSchema } from "@/lib/validators/signup";
import { createUserAccount } from "@/lib/services/auth";

// Step Components
import AccountDetailsForm from "@/components/forms/signup/account-details-form";
import BusinessDetailsForm from "@/components/forms/signup/business-details-form";
import SubscriptionPlanForm from "@/components/forms/signup/subscription-plan-form";
import { toast } from "sonner";

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const methods = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      // Step 1: User Account Information
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",

      // Step 2: Business Information
      businessName: "",
      businessType: "independent",
      businessDescription: "",
      businessLicenseNumber: "",
      subdomain: "",
      businessPhone: "",
      businessEmail: "",
      businessAddress: {
        province: "",
        district: "",
        commune: "",
        village: "",
        streetAddress: "",
      },
      businessLogo: "",

      // Step 3: Subscription Plan
      subscriptionPlan: "",
      acceptTerms: false,
    },
    mode: "onChange",
  });

  const totalSteps = signUpSteps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const nextStep = async () => {
    const fieldsToValidate = signUpSteps[currentStep].fieldsToValidate;
    const result = await methods.trigger(fieldsToValidate as any);

    if (result) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo(0, 0);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const onSubmit = async (data: SignupData) => {
    setIsSubmitting(true);
    try {
      await createUserAccount(data);

      // Redirect to verification page with email
      router.push(`/verification?email=${encodeURIComponent(data.email)}`);
    } catch (error: any) {
      toast("Registration failed", {
        description: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <AccountDetailsForm />;
      case 1:
        return <BusinessDetailsForm />;
      case 2:
        return <SubscriptionPlanForm />;
      default:
        return null;
    }
  };

  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="w-full">
      <Card className="w-full shadow-lg border-0 md:border">
        <CardHeader className="space-y-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">
              {signUpSteps[currentStep].title}
            </CardTitle>
            <div className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {totalSteps}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
          <CardDescription>
            {signUpSteps[currentStep].description}
          </CardDescription>
        </CardHeader>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <CardContent className="pt-2">{renderStepContent()}</CardContent>

            <CardFooter className="flex justify-between pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0 || isSubmitting}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              {isLastStep ? (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center"
                >
                  {isSubmitting
                    ? "Creating Account..."
                    : "Complete Registration"}
                  {!isSubmitting && <Check className="ml-2 h-4 w-4" />}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={isSubmitting}
                  className="flex items-center"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </form>
        </FormProvider>
      </Card>

      <div className="mt-4 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary hover:underline underline-offset-4"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
