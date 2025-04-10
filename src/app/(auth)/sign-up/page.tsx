/**
 * @file src/app/(auth)/signup/page.tsx
 * Main signup page component for Pharmart registration flow
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
import { signUpSteps } from "@/lib/constants/signup";
import Link from "next/link";
import AccountDetailsForm from "@/components/forms/signup/account-details-form";
import BusinessDetailsForm from "@/components/forms/signup/business-details-form";
import PharmacyDetailsForm from "@/components/forms/signup/pharmacy-details-form";
import SubscriptionPlanForm from "@/components/forms/signup/subscription-plan-form";
import ReviewInformationForm from "@/components/forms/signup/review-information-form";
import SignupSuccessPage from "@/components/forms/signup/signup-success";
import { SignupData, signupSchema } from "@/lib/validators/signup";
import { createUserAccount } from "@/lib/services/auth";
import LogoIcon from "@/components/logo-icon";

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();

  const methods = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      phoneNumber: "",
      businessName: "",
      businessType: "independent",
      businessAddress: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
      pharmacyLicenseNumber: "",
      pharmacistInCharge: "",
      pharmacistLicenseNumber: "",
      operatingHours: {
        monday: { open: "09:00", close: "18:00", isOpen: true },
        tuesday: { open: "09:00", close: "18:00", isOpen: true },
        wednesday: { open: "09:00", close: "18:00", isOpen: true },
        thursday: { open: "09:00", close: "18:00", isOpen: true },
        friday: { open: "09:00", close: "18:00", isOpen: true },
        saturday: { open: "09:00", close: "13:00", isOpen: true },
        sunday: { open: "09:00", close: "13:00", isOpen: false },
      },
      servicesOffered: [],
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
      const response = await createUserAccount(data);
      // Move to success page
      setIsComplete(true);
      // Reset form
      methods.reset();
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
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
        return <PharmacyDetailsForm />;
      case 3:
        return <SubscriptionPlanForm />;
      case 4:
        return <ReviewInformationForm />;
      default:
        return null;
    }
  };

  const isLastStep = currentStep === totalSteps - 1;

  if (isComplete) {
    return <SignupSuccessPage />;
  }

  return (
    <div className="container max-w-3xl py-10 px-4 md:px-6">
      <div className="flex justify-center mb-8">
        <Link href="/" className="flex items-center space-x-2">
          <LogoIcon className="h-10 w-10" />
          <span className="text-2xl font-bold text-primary">Pharmart</span>
        </Link>
      </div>

      <FormProvider {...methods}>
        <Card className="w-full shadow-lg">
          <CardHeader className="space-y-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">
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

          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <CardContent>{renderStepContent()}</CardContent>

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
        </Card>
      </FormProvider>

      <div className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
