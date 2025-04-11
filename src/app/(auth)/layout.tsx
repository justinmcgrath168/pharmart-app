/**
 * @file src/app/(auth)/layout.tsx
 * Modern split-screen authentication layout
 */
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoIcon from "@/components/logo-icon";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define titles and descriptions based on current path
  const getContent = () => {
    switch (pathname) {
      case "/login":
        return {
          title: "Welcome back",
          description:
            "Sign in to your Pharmart account to manage your pharmacy",
        };
      case "/signup":
        return {
          title: "Get started",
          description:
            "Create your Pharmart account and grow your pharmacy business",
        };
      case "/forgot-password":
        return {
          title: "Reset password",
          description: "Request a password reset link to recover your account",
        };
      case "/reset-password":
        return {
          title: "Create new password",
          description: "Set a new secure password for your account",
        };
      case "/verification":
        return {
          title: "Verify your account",
          description:
            "Complete the verification process to access your dashboard",
        };
      default:
        return {
          title: "Pharmart",
          description: "Digital pharmacy management platform",
        };
    }
  };

  const content = getContent();

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Left section - Auth content */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="p-4 md:p-8">
          <Link href="/" className="flex items-center">
            <LogoIcon className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold text-primary">
              Pharmart
            </span>
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-8">
          <div className="w-full max-w-md mx-auto">{children}</div>
        </div>

        <div className="p-4 md:p-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pharmart. All rights reserved.</p>
        </div>
      </div>

      {/* Right section - Banner Image (hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gradient-to-br from-primary/90 to-primary">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-12 text-white bg-black/20">
          <div className="max-w-lg text-center">
            <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
            <p className="text-lg opacity-90">{content.description}</p>
            <div className="mt-12">
              <div className="flex justify-center space-x-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg">
                  <p className="font-medium text-lg">
                    {
                      "The complete solution for my pharmacy's digital presence."
                    }
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary-foreground flex items-center justify-center">
                      <span className="text-primary font-bold">JD</span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs opacity-70">Pharmacy Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/pharmacy-banner.jpg"
          alt="Pharmacy Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
