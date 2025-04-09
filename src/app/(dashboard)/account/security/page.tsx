/**
 * @file app/dashboard/account/security/page.tsx
 * @description Security settings page for password and 2FA management
 */

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  LaptopIcon,
  MobileIcon,
} from "@radix-ui/react-icons";

// Form validation schema
const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, {
      message: "Current password is required.",
    }),
    newPassword: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, {
        message:
          "Password must include uppercase, lowercase, number, and special character.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function SecurityPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Mock session data - would come from API in a real implementation
  const activeSessions = [
    {
      id: "session-1",
      device: "Windows PC - Chrome",
      location: "San Francisco, CA",
      lastActive: "Just now",
      isCurrent: true,
      icon: <LaptopIcon className="h-4 w-4" />,
    },
    {
      id: "session-2",
      device: "iPhone 13 - Safari",
      location: "San Francisco, CA",
      lastActive: "2 hours ago",
      isCurrent: false,
      icon: <MobileIcon className="h-4 w-4" />,
    },
  ];

  // Initialize form
  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof passwordSchema>) {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // This is where we would normally call our API
      // For now, we'll just simulate a successful submission
      console.log(values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      setSuccess(true);
      form.reset();
    } catch (err) {
      setError("An error occurred while changing your password." + err);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleTwoFactorToggle() {
    // In a real implementation, this would call the API to enable/disable 2FA
    // For now, we'll just toggle the state
    setTwoFactorEnabled(!twoFactorEnabled);
  }

  async function handleLogoutSession(sessionId: string) {
    // In a real implementation, this would call the API to logout the session
    // For now, we'll just log the session ID
    console.log(`Logging out session: ${sessionId}`);
    alert(`Session ${sessionId} would be logged out in a real implementation.`);
  }

  async function handleLogoutAllSessions() {
    // In a real implementation, this would call the API to logout all sessions except current
    // For now, we'll just show an alert
    alert("All other sessions would be logged out in a real implementation.");
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Security Settings
          </h1>
          <p className="text-zinc-500">
            Manage your account security settings.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Change Password Card */}
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>
                Update your password to maintain account security. We recommend
                changing your password regularly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-6">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="mb-6 border-green-200 bg-green-50 text-green-800">
                  <CheckCircledIcon className="h-4 w-4 text-green-600" />
                  <AlertDescription>
                    Your password has been changed successfully.
                  </AlertDescription>
                </Alert>
              )}

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="currentPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Must be at least 8 characters with uppercase,
                            lowercase, number, and special character.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm New Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Changing Password..."
                        : "Change Password"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Two-Factor Authentication Card */}
          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>
                Add an extra layer of security to your account by requiring both
                your password and a code from your mobile device.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-zinc-500">
                    {twoFactorEnabled
                      ? "Your account is protected with two-factor authentication."
                      : "Enable two-factor authentication for enhanced security."}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {twoFactorEnabled && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      Enabled
                    </Badge>
                  )}
                  <Switch
                    checked={twoFactorEnabled}
                    onCheckedChange={handleTwoFactorToggle}
                  />
                </div>
              </div>

              {twoFactorEnabled && (
                <div className="mt-6 p-4 border rounded-md bg-zinc-50">
                  <h3 className="font-medium mb-2">Recovery Codes</h3>
                  <p className="text-sm text-zinc-500 mb-4">
                    Recovery codes can be used to access your account if you
                    lose your phone or cannot receive two-factor authentication
                    codes.
                  </p>
                  <Button variant="outline" size="sm">
                    View Recovery Codes
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Active Sessions Card */}
          <Card>
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
              <CardDescription>
                These are the devices that are currently logged into your
                account. You can log out of any session that you don&apos;t
                recognize.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {activeSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-zinc-100 p-1.5 rounded-md">
                        {session.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{session.device}</p>
                          {session.isCurrent && (
                            <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-zinc-500">
                          {session.location} • Last active: {session.lastActive}
                        </p>
                      </div>
                    </div>
                    {!session.isCurrent && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => handleLogoutSession(session.id)}
                      >
                        Log out
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="flex justify-end">
                <Button
                  variant="outline"
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 hover:border-red-200"
                  onClick={handleLogoutAllSessions}
                >
                  Log Out All Other Sessions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Account Activity Card */}
          <Card>
            <CardHeader>
              <CardTitle>Account Activity Log</CardTitle>
              <CardDescription>
                Review recent activity on your account for any suspicious
                behavior.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-500 mb-4">
                The account activity log shows login attempts, password changes,
                and other security events.
              </p>
              <Button variant="outline">View Activity Log</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
