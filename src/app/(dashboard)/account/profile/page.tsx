/**
 * @file app/dashboard/account/profile/page.tsx
 * @description User profile management page
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
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

// Form validation schema
const profileSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .readonly(),
  phoneNumber: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  jobTitle: z.string().optional(),
  bio: z
    .string()
    .max(500, {
      message: "Bio must not exceed 500 characters.",
    })
    .optional(),
});

export default function ProfilePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Mock user data - would come from API/auth context in a real implementation
  const userData = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phoneNumber: "+1 (555) 123-4567",
    jobTitle: "Pharmacy Manager",
    bio: "Experienced pharmacy manager with a focus on customer service and operational efficiency.",
    avatar: "",
  };

  // Initialize form
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: userData,
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof profileSchema>) {
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
    } catch (err) {
      setError("An error occurred while updating your profile." + err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Account Settings
          </h1>
          <p className="text-zinc-500">
            Manage your account settings and profile information.
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="grid gap-6">
              {/* Profile Picture Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Picture</CardTitle>
                  <CardDescription>
                    Your profile picture will be shown throughout the
                    application.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row items-center gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage
                      src={userData.avatar}
                      alt={`${userData.firstName} ${userData.lastName}`}
                    />
                    <AvatarFallback className="text-3xl bg-indigo-100 text-indigo-600">
                      {userData.firstName.charAt(0)}
                      {userData.lastName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline">Upload New Picture</Button>
                    <Button
                      variant="ghost"
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      Remove Picture
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Profile Information Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal information and contact details.
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
                        Your profile has been updated successfully.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input {...field} disabled />
                              </FormControl>
                              <FormDescription>
                                Contact support to change your email address.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us a little about yourself"
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              {field.value?.length || 0}/500 characters
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-end">
                        <Button
                          type="submit"
                          className="bg-indigo-600 hover:bg-indigo-700"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Saving..." : "Save Changes"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your password and security preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Password</h3>
                    <p className="text-zinc-500 mb-4">
                      Last changed: 3 months ago
                    </p>
                    <Button variant="outline">Change Password</Button>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Two-Factor Authentication
                    </h3>
                    <p className="text-zinc-500 mb-4">
                      Add an extra layer of security to your account.
                    </p>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Active Sessions
                    </h3>
                    <p className="text-zinc-500 mb-4">
                      Manage your active sessions across devices.
                    </p>
                    <Button variant="outline">View Active Sessions</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Manage how and when you receive notifications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-500">
                  Notification settings will be implemented in a future update.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
                <CardDescription>
                  Manage your subscription and payment methods.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-500">
                  Billing settings will be implemented in a future update.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
