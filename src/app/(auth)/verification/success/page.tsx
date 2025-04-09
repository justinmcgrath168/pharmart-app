/**
 * @file app/(auth)/verification/success/page.tsx
 * @description Email verification success page
 */

"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function VerificationSuccessPage() {
  const router = useRouter();

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Email Verified!</CardTitle>
        <CardDescription>
          Your email has been successfully verified. You can now sign in to your
          Pharmart account.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircledIcon className="h-8 w-8 text-green-600" />
        </div>

        <div className="text-center mb-6">
          <p className="text-zinc-600">
            Thank you for verifying your email address. Your account is now
            active, and you can start setting up your pharmacy on Pharmart.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={() => router.push("/auth/signin")}
          className="w-full bg-indigo-600 hover:bg-indigo-700"
        >
          Continue to Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}
