/**
 * @file app/dashboard/staff/permissions/page.tsx
 * @description Role permissions management page for configuring detailed access controls
 */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function RolePermissionsPage() {
  const [success, setSuccess] = useState(false);

  // Define roles
  const roles = [
    {
      value: "admin",
      label: "Administrator",
      description: "Full access to all features and settings",
      badge: "bg-red-100 text-red-700",
      canBeModified: false,
    },
    {
      value: "manager",
      label: "Manager",
      description: "Access to most features except billing and user management",
      badge: "bg-orange-100 text-orange-700",
      canBeModified: true,
    },
    {
      value: "pharmacist",
      label: "Pharmacist",
      description: "Access to prescriptions, inventory, and patient records",
      badge: "bg-blue-100 text-blue-700",
      canBeModified: true,
    },
    {
      value: "technician",
      label: "Technician",
      description: "Limited access to prescriptions and inventory",
      badge: "bg-green-100 text-green-700",
      canBeModified: true,
    },
    {
      value: "cashier",
      label: "Cashier",
      description: "Access to POS system only",
      badge: "bg-purple-100 text-purple-700",
      canBeModified: true,
    },
  ];

  // Define feature categories and permissions
  const permissionCategories = [
    {
      name: "Dashboard",
      permissions: [
        {
          id: "dashboard.view",
          name: "View Dashboard",
          description: "Access to dashboard overview",
        },
        {
          id: "dashboard.analytics",
          name: "View Analytics",
          description: "Access to detailed analytics and reports",
        },
      ],
    },
    {
      name: "Inventory Management",
      permissions: [
        {
          id: "inventory.view",
          name: "View Inventory",
          description: "View product inventory",
        },
        {
          id: "inventory.add",
          name: "Add Products",
          description: "Add new products to inventory",
        },
        {
          id: "inventory.edit",
          name: "Edit Products",
          description: "Modify existing products",
        },
        {
          id: "inventory.delete",
          name: "Delete Products",
          description: "Remove products from inventory",
        },
        {
          id: "inventory.adjust",
          name: "Adjust Stock",
          description: "Make stock adjustments",
        },
        {
          id: "inventory.transfer",
          name: "Transfer Stock",
          description: "Transfer stock between locations",
        },
      ],
    },
    {
      name: "Customer Management",
      permissions: [
        {
          id: "customers.view",
          name: "View Customers",
          description: "View customer profiles",
        },
        {
          id: "customers.add",
          name: "Add Customers",
          description: "Create new customer profiles",
        },
        {
          id: "customers.edit",
          name: "Edit Customers",
          description: "Modify existing customer profiles",
        },
        {
          id: "customers.delete",
          name: "Delete Customers",
          description: "Remove customer profiles",
        },
        {
          id: "customers.medical",
          name: "View Medical Records",
          description: "Access customer medical records",
        },
      ],
    },
    {
      name: "Prescription Management",
      permissions: [
        {
          id: "prescriptions.view",
          name: "View Prescriptions",
          description: "View prescription details",
        },
        {
          id: "prescriptions.create",
          name: "Create Prescriptions",
          description: "Create new prescriptions",
        },
        {
          id: "prescriptions.fill",
          name: "Fill Prescriptions",
          description: "Fill and dispense prescriptions",
        },
        {
          id: "prescriptions.verify",
          name: "Verify Prescriptions",
          description: "Verify prescription details (pharmacist only)",
        },
        {
          id: "prescriptions.transfer",
          name: "Transfer Prescriptions",
          description: "Transfer prescriptions to/from other pharmacies",
        },
      ],
    },
    {
      name: "POS System",
      permissions: [
        {
          id: "pos.operate",
          name: "Operate POS",
          description: "Process sales transactions",
        },
        {
          id: "pos.discounts",
          name: "Apply Discounts",
          description: "Apply discounts to transactions",
        },
        {
          id: "pos.returns",
          name: "Process Returns",
          description: "Process customer returns and refunds",
        },
        {
          id: "pos.reports",
          name: "View POS Reports",
          description: "Access POS sales reports",
        },
      ],
    },
    {
      name: "Admin & Settings",
      permissions: [
        {
          id: "admin.settings",
          name: "Manage Settings",
          description: "Access and modify system settings",
        },
        {
          id: "admin.users",
          name: "Manage Users",
          description: "Add, edit, and remove user accounts",
        },
        {
          id: "admin.roles",
          name: "Manage Roles",
          description: "Configure role permissions",
        },
        {
          id: "admin.billing",
          name: "Manage Billing",
          description: "Access billing and subscription settings",
        },
        {
          id: "admin.integrations",
          name: "Manage Integrations",
          description: "Configure system integrations",
        },
      ],
    },
  ];

  // Initial permission states
  // In a real implementation, these would come from the API
  const initialRolePermissions = {
    admin: permissionCategories.flatMap((category) =>
      category.permissions.map((permission) => permission.id)
    ),
    manager: [
      "dashboard.view",
      "dashboard.analytics",
      "inventory.view",
      "inventory.add",
      "inventory.edit",
      "inventory.adjust",
      "inventory.transfer",
      "customers.view",
      "customers.add",
      "customers.edit",
      "prescriptions.view",
      "prescriptions.create",
      "prescriptions.fill",
      "prescriptions.transfer",
      "pos.operate",
      "pos.discounts",
      "pos.returns",
      "pos.reports",
      "admin.settings",
    ],
    pharmacist: [
      "dashboard.view",
      "inventory.view",
      "inventory.adjust",
      "customers.view",
      "customers.add",
      "customers.edit",
      "customers.medical",
      "prescriptions.view",
      "prescriptions.create",
      "prescriptions.fill",
      "prescriptions.verify",
      "prescriptions.transfer",
      "pos.operate",
      "pos.discounts",
    ],
    technician: [
      "dashboard.view",
      "inventory.view",
      "customers.view",
      "prescriptions.view",
      "prescriptions.fill",
      "pos.operate",
    ],
    cashier: ["pos.operate", "pos.discounts", "pos.returns"],
  };

  // State for role permissions
  const [rolePermissions, setRolePermissions] = useState(
    initialRolePermissions
  );
  const [activeRole, setActiveRole] = useState("manager");

  // Check if a permission is granted for the current role
  const hasPermission = (permissionId: string) => {
    return rolePermissions[activeRole as keyof typeof rolePermissions].includes(
      permissionId
    );
  };

  // Toggle permission for the current role
  const togglePermission = (permissionId: string) => {
    const currentPermissions =
      rolePermissions[activeRole as keyof typeof rolePermissions];
    const newPermissions = hasPermission(permissionId)
      ? currentPermissions.filter((id) => id !== permissionId)
      : [...currentPermissions, permissionId];

    setRolePermissions({
      ...rolePermissions,
      [activeRole]: newPermissions,
    });
  };

  // Save changes
  const saveChanges = async () => {
    // In a real implementation, this would call the API
    console.log("Saving permissions:", rolePermissions);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success message
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  // Get the currently active role info
  const activeRoleInfo = roles.find((role) => role.value === activeRole);
  const isRoleModifiable = activeRoleInfo?.canBeModified;

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Role Permissions
          </h1>
          <p className="text-zinc-500">
            Configure what each role can access in your pharmacy system.
          </p>
        </div>

        {success && (
          <Alert className="mb-6 border-green-200 bg-green-50 text-green-800">
            <CheckCircledIcon className="h-4 w-4 text-green-600" />
            <AlertDescription>Permissions saved successfully.</AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Permission Settings</CardTitle>
            <CardDescription>
              Fine-tune what each role can access in your pharmacy system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              value={activeRole}
              onValueChange={setActiveRole}
              className="w-full"
            >
              <TabsList className="mb-8">
                {roles.map((role) => (
                  <TabsTrigger key={role.value} value={role.value}>
                    <div className="flex items-center gap-2">
                      <span>{role.label}</span>
                      {!role.canBeModified && (
                        <Badge variant="outline" className="ml-1 text-xs">
                          Default
                        </Badge>
                      )}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {roles.map((role) => (
                <TabsContent
                  key={role.value}
                  value={role.value}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold flex items-center">
                        <Badge className={role.badge}>{role.label}</Badge>
                        {!role.canBeModified && (
                          <Badge variant="outline" className="ml-2 text-xs">
                            Default Role (Cannot Be Modified)
                          </Badge>
                        )}
                      </h2>
                      <p className="text-zinc-500 mt-1">{role.description}</p>
                    </div>

                    {role.canBeModified && (
                      <Button
                        onClick={saveChanges}
                        className="bg-indigo-600 hover:bg-indigo-700"
                      >
                        Save Changes
                      </Button>
                    )}
                  </div>

                  {!role.canBeModified ? (
                    <Alert className="bg-zinc-50 border-zinc-200">
                      <AlertDescription>
                        This is a default system role with predefined
                        permissions that cannot be modified.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <div className="space-y-8">
                      {permissionCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                          <h3 className="text-lg font-medium mb-4">
                            {category.name}
                          </h3>
                          <div className="space-y-4">
                            {category.permissions.map(
                              (permission, permIndex) => (
                                <div
                                  key={permIndex}
                                  className="flex items-center justify-between bg-white p-3 rounded-md border"
                                >
                                  <div>
                                    <div className="font-medium">
                                      {permission.name}
                                    </div>
                                    <div className="text-sm text-zinc-500">
                                      {permission.description}
                                    </div>
                                  </div>
                                  <Switch
                                    checked={hasPermission(permission.id)}
                                    onCheckedChange={() =>
                                      togglePermission(permission.id)
                                    }
                                    disabled={!isRoleModifiable}
                                  />
                                </div>
                              )
                            )}
                          </div>
                          {categoryIndex < permissionCategories.length - 1 && (
                            <Separator className="my-6" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Permission Templates</CardTitle>
              <CardDescription>
                Apply predefined permission templates to roles.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-500 mb-4">
                Templates provide standard permission sets for common pharmacy
                roles.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" disabled={!isRoleModifiable}>
                  Basic Access
                </Button>
                <Button variant="outline" disabled={!isRoleModifiable}>
                  Standard Access
                </Button>
                <Button variant="outline" disabled={!isRoleModifiable}>
                  Full Access
                </Button>
                <Button variant="outline" disabled={!isRoleModifiable}>
                  POS Only
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bulk Actions</CardTitle>
              <CardDescription>
                Apply changes to multiple permissions at once.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Enable/Disable All</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" disabled={!isRoleModifiable}>
                      Enable All
                    </Button>
                    <Button variant="outline" disabled={!isRoleModifiable}>
                      Disable All
                    </Button>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="font-medium mb-2">Copy Permissions From</p>
                  <div className="grid grid-cols-2 gap-3">
                    {roles
                      .filter((r) => r.value !== activeRole)
                      .map((role) => (
                        <Button
                          key={role.value}
                          variant="outline"
                          disabled={!isRoleModifiable}
                          onClick={() => {
                            if (isRoleModifiable) {
                              setRolePermissions({
                                ...rolePermissions,
                                [activeRole]: [
                                  ...rolePermissions[
                                    role.value as keyof typeof rolePermissions
                                  ],
                                ],
                              });
                            }
                          }}
                        >
                          {role.label}
                        </Button>
                      ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
