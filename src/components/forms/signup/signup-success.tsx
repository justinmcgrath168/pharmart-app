/**
 * @file src/components/forms/signup/signup-success.tsx
 * Success page shown after successful registration
 */
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Check, ChevronRight, Mail, Store, Wallet } from "lucide-react";
import Link from "next/link";

export default function SignupSuccessPage() {
  return (
    <div className="container max-w-3xl py-10 px-4 md:px-6">
      <div className="flex justify-center mb-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">
            P
          </div>
          <span className="text-2xl font-bold text-primary">Pharmart</span>
        </Link>
      </div>

      <Card className="w-full shadow-lg text-center">
        <CardHeader className="pb-4">
          <div className="mx-auto my-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Registration Completed!</CardTitle>
          <CardDescription className="text-lg">
            Thank you for joining Pharmart
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            We&apos;re excited to have you onboard. Your account has been
            created successfully and is now pending verification by our team.
            This process typically takes 24-48 hours.
          </p>

          <div className="mt-8 space-y-4">
            <h3 className="text-md font-medium">What happens next?</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <Mail className="h-10 w-10 text-primary mb-2" />
                <h4 className="text-sm font-medium">Check Your Email</h4>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  We&apos;ve sent a verification email to confirm your account
                </p>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <Store className="h-10 w-10 text-primary mb-2" />
                <h4 className="text-sm font-medium">Store Setup</h4>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  Once verified, you&apos;ll be able to customize your pharmacy
                  store
                </p>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <Wallet className="h-10 w-10 text-primary mb-2" />
                <h4 className="text-sm font-medium">Free Trial</h4>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  Enjoy your 14-day free trial with full access to all features
                </p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button asChild className="w-full">
            <Link href="/login">
              Go to Login
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            If you need any assistance, please contact our support team at{" "}
            <a
              href="mailto:support@pharmart.app"
              className="text-primary underline underline-offset-4"
            >
              support@pharmart.app
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
