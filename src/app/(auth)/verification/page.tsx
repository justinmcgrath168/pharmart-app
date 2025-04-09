/**
 * @file app/(auth)/verification/page.tsx
 * @description Email verification page shown after signup
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export default function VerificationPage() {
  const [isResending, setIsResending] = useState(false);
  const [resendError, setResendError] = useState<string | null>(null);
  const [resendSuccess, setResendSuccess] = useState(false);

  // Simulate email from query params (would actually get from session/route)
  const email = "john@example.com";

  async function handleResend() {
    setIsResending(true);
    setResendError(null);
    setResendSuccess(false);

    try {
      // This is where we would normally call our API
      // For now, we'll just simulate a successful submission
      console.log(`Resending verification email to ${email}`);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      setResendSuccess(true);
    } catch (err) {
      setResendError(
        "An error occurred while resending the verification email." + err
      );
    } finally {
      setIsResending(false);
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Verify your email</CardTitle>
        <CardDescription>
          We&apos;ve sent a verification link to {email}. Please check your
          inbox and click the link to verify your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
          <EnvelopeClosedIcon className="h-8 w-8 text-indigo-600" />
        </div>

        <div className="text-center mb-6">
          <p className="text-zinc-600 mb-2">
            Can&apos;t find the email? Check your spam folder or click below to
            resend the verification link.
          </p>
        </div>

        {resendError && (
          <Alert variant="destructive" className="mb-4 w-full">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertDescription>{resendError}</AlertDescription>
          </Alert>
        )}

        {resendSuccess && (
          <Alert className="mb-4 w-full border-green-200 bg-green-50 text-green-800">
            <CheckCircledIcon className="h-4 w-4 text-green-600" />
            <AlertDescription>
              Verification email resent! Please check your inbox.
            </AlertDescription>
          </Alert>
        )}

        <Button
          onClick={handleResend}
          variant="outline"
          className="w-full"
          disabled={isResending}
        >
          {isResending ? "Sending..." : "Resend Verification Email"}
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-zinc-500">
          Already verified?{" "}
          <Link
            href="/auth/signin"
            className="text-indigo-600 hover:underline font-medium"
          >
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
