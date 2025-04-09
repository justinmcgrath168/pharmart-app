/**
 * @file app/dashboard/staff/page.tsx
 * @description Staff management page for adding and managing pharmacy staff members
 */

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
  DotsVerticalIcon,
  PlusIcon,
} from "@radix-ui/react-icons";

// Form validation schema for new staff member
const staffMemberSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  role: z.string({
    required_error: "Please select a role.",
  }),
  jobTitle: z.string().optional(),
});

export default function StaffManagementPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [staffMembers, setStaffMembers] = useState([
    {
      id: "staff-1",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      role: "admin",
      jobTitle: "Pharmacy Manager",
      status: "active",
      avatar: "",
    },
    {
      id: "staff-2",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      role: "pharmacist",
      jobTitle: "Lead Pharmacist",
      status: "active",
      avatar: "",
    },
    {
      id: "staff-3",
      firstName: "Michael",
      lastName: "Johnson",
      email: "michael@example.com",
      role: "technician",
      jobTitle: "Pharmacy Technician",
      status: "invited",
      avatar: "",
    },
  ]);

  // Initialize form
  const form = useForm<z.infer<typeof staffMemberSchema>>({
    resolver: zodResolver(staffMemberSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      jobTitle: "",
    },
  });

  // Role definitions
  const roles = [
    {
      value: "admin",
      label: "Administrator",
      description: "Full access to all features and settings",
      badge: "bg-red-100 text-red-700",
    },
    {
      value: "manager",
      label: "Manager",
      description: "Access to most features except billing and user management",
      badge: "bg-orange-100 text-orange-700",
    },
    {
      value: "pharmacist",
      label: "Pharmacist",
      description: "Access to prescriptions, inventory, and patient records",
      badge: "bg-blue-100 text-blue-700",
    },
    {
      value: "technician",
      label: "Technician",
      description: "Limited access to prescriptions and inventory",
      badge: "bg-green-100 text-green-700",
    },
    {
      value: "cashier",
      label: "Cashier",
      description: "Access to POS system only",
      badge: "bg-purple-100 text-purple-700",
    },
  ];

  // Form submission handler
  async function onSubmit(values: z.infer<typeof staffMemberSchema>) {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // This is where we would normally call our API
      // For now, we'll just simulate a successful submission
      console.log(values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Add new staff member to the list
      const newStaffMember = {
        id: `staff-${staffMembers.length + 1}`,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        role: values.role,
        jobTitle: values.jobTitle || "",
        status: "invited",
        avatar: "",
      };

      setStaffMembers([...staffMembers, newStaffMember]);

      // Show success message
      setSuccess(true);
      form.reset();

      // Close dialog after successful submission
      setTimeout(() => {
        setIsDialogOpen(false);
        setSuccess(false);
      }, 1500);
    } catch (err) {
      setError("An error occurred while adding the staff member." + err);
    } finally {
      setIsSubmitting(false);
    }
  }

  function getRoleBadgeClass(role: string) {
    const roleInfo = roles.find((r) => r.value === role);
    return roleInfo ? roleInfo.badge : "bg-gray-100 text-gray-700";
  }

  function getRoleLabel(role: string) {
    const roleInfo = roles.find((r) => r.value === role);
    return roleInfo ? roleInfo.label : role;
  }

  async function handleResendInvite(memberId: string) {
    alert(
      `Invitation would be resent to member ${memberId} in a real implementation.`
    );
  }

  async function handleDeactivate(memberId: string) {
    alert(`Member ${memberId} would be deactivated in a real implementation.`);
  }

  async function handleDelete(memberId: string) {
    alert(`Member ${memberId} would be deleted in a real implementation.`);
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Staff Management
            </h1>
            <p className="text-zinc-500">
              Manage your pharmacy staff and their access levels.
            </p>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Staff Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Add New Staff Member</DialogTitle>
                <DialogDescription>
                  Add a new staff member to your pharmacy team. They will
                  receive an email invitation to create an account.
                </DialogDescription>
              </DialogHeader>

              {error && (
                <Alert variant="destructive">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-green-200 bg-green-50 text-green-800">
                  <CheckCircledIcon className="h-4 w-4 text-green-600" />
                  <AlertDescription>
                    Staff member added successfully! An invitation has been sent
                    to their email.
                  </AlertDescription>
                </Alert>
              )}

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane" {...field} />
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
                            <Input placeholder="Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="jane.smith@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {roles.map((role) => (
                                <SelectItem key={role.value} value={role.value}>
                                  <div className="flex items-center">
                                    <span>{role.label}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            {field.value &&
                              roles.find((r) => r.value === field.value)
                                ?.description}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Head Pharmacist" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <DialogFooter className="mt-6">
                    <Button
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Adding..." : "Add Staff Member"}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Staff Members</CardTitle>
            <CardDescription>
              Manage access levels and permissions for your pharmacy staff.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-zinc-50">
                    <th className="px-4 py-3 text-left font-medium">Name</th>
                    <th className="px-4 py-3 text-left font-medium">Role</th>
                    <th className="px-4 py-3 text-left font-medium">
                      Job Title
                    </th>
                    <th className="px-4 py-3 text-left font-medium">Status</th>
                    <th className="px-4 py-3 text-right font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {staffMembers.map((member) => (
                    <tr
                      key={member.id}
                      className="border-b last:border-0 hover:bg-zinc-50"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={member.avatar}
                              alt={`${member.firstName} ${member.lastName}`}
                            />
                            <AvatarFallback className="text-sm bg-indigo-100 text-indigo-600">
                              {member.firstName.charAt(0)}
                              {member.lastName.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">
                              {member.firstName} {member.lastName}
                            </div>
                            <div className="text-zinc-500 text-xs">
                              {member.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge className={getRoleBadgeClass(member.role)}>
                          {getRoleLabel(member.role)}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">{member.jobTitle || "-"}</td>
                      <td className="px-4 py-3">
                        <Badge
                          variant="outline"
                          className={
                            member.status === "active"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : "bg-yellow-50 text-yellow-700 border-yellow-200"
                          }
                        >
                          {member.status === "active" ? "Active" : "Invited"}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <DotsVerticalIcon className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-[160px]"
                          >
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => alert(`Edit ${member.firstName}`)}
                            >
                              Edit
                            </DropdownMenuItem>
                            {member.status === "invited" ? (
                              <DropdownMenuItem
                                onClick={() => handleResendInvite(member.id)}
                              >
                                Resend Invite
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem
                                onClick={() => handleDeactivate(member.id)}
                              >
                                Deactivate
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-red-600 focus:text-red-600"
                              onClick={() => handleDelete(member.id)}
                            >
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Role Permissions</CardTitle>
              <CardDescription>
                Overview of access levels for each role in your pharmacy.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {roles.map((role) => (
                  <div
                    key={role.value}
                    className="pb-4 last:pb-0 last:border-0 border-b"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge className={role.badge}>{role.label}</Badge>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                    <p className="text-sm text-zinc-500">{role.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
              <CardDescription>
                Recent changes to staff accounts and permissions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    action: "Added new staff member",
                    subject: "Jane Smith",
                    actor: "John Doe",
                    timestamp: "Today at 2:30 PM",
                  },
                  {
                    action: "Changed role",
                    subject: "Michael Johnson",
                    actor: "John Doe",
                    timestamp: "Yesterday at 10:15 AM",
                    details: "Technician → Pharmacist",
                  },
                  {
                    action: "Deactivated account",
                    subject: "Sarah Williams",
                    actor: "John Doe",
                    timestamp: "Apr 5, 2025",
                  },
                  {
                    action: "Updated permissions",
                    subject: "Administrator role",
                    actor: "System",
                    timestamp: "Mar 28, 2025",
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2"></div>
                    <div>
                      <p className="font-medium">
                        {activity.action}:{" "}
                        <span className="text-indigo-600">
                          {activity.subject}
                        </span>
                      </p>
                      <p className="text-sm text-zinc-500">
                        By {activity.actor} • {activity.timestamp}
                        {activity.details && ` • ${activity.details}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="link" className="text-indigo-600">
                  View All Activity
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Role Permission Settings</CardTitle>
              <CardDescription>
                Fine-tune what each role can access in your pharmacy system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-500 mb-4">
                Configure detailed permission settings for each role to ensure
                staff members have appropriate access to system features.
              </p>
              <Button variant="outline">Configure Permissions</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
