/**
 * @file app/(dashboard)/dashboard/page.tsx
 * @description Dashboard page mockup for customer platform
 */

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  ArrowDown,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  Calendar,
  ChevronRight,
  Activity,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Johnson Family Pharmacy
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Apr 1 - Apr 8, 2025
          </Button>
          <Button>
            <DollarSign className="h-4 w-4 mr-2" />
            Create Invoice
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-indigo-600" />
              </div>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 flex items-center"
              >
                <ArrowUp className="h-3 w-3 mr-1" /> 12.5%
              </Badge>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground">
                Total Revenue
              </p>
              <h3 className="text-2xl font-bold">$24,345.62</h3>
              <p className="text-xs text-muted-foreground mt-1">
                +$3,240.80 from last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-indigo-600" />
              </div>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 flex items-center"
              >
                <ArrowUp className="h-3 w-3 mr-1" /> 8.2%
              </Badge>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground">
                Total Orders
              </p>
              <h3 className="text-2xl font-bold">842</h3>
              <p className="text-xs text-muted-foreground mt-1">
                +64 from last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 flex items-center"
              >
                <ArrowUp className="h-3 w-3 mr-1" /> 5.3%
              </Badge>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground">
                New Customers
              </p>
              <h3 className="text-2xl font-bold">38</h3>
              <p className="text-xs text-muted-foreground mt-1">
                +2 from last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <Package className="h-6 w-6 text-indigo-600" />
              </div>
              <Badge
                variant="outline"
                className="bg-red-50 text-red-700 flex items-center"
              >
                <ArrowDown className="h-3 w-3 mr-1" /> 2.8%
              </Badge>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground">
                Low Stock Items
              </p>
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-xs text-muted-foreground mt-1">
                3 require immediate attention
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Sales Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle>Sales Overview</CardTitle>
              <Tabs defaultValue="weekly">
                <TabsList>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <CardDescription>
              Monitor your sales performance over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              {/* This would be replaced with an actual chart using Recharts */}
              <div className="h-full w-full bg-zinc-100 rounded-md flex items-center justify-center">
                <p className="text-zinc-500">Sales Chart</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your pharmacy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  icon: <ShoppingCart className="h-4 w-4 text-green-600" />,
                  title: "New Online Order #34928",
                  time: "10 minutes ago",
                  description: "John Doe placed a new order for $78.50",
                },
                {
                  icon: <Package className="h-4 w-4 text-orange-600" />,
                  title: "Inventory Alert",
                  time: "45 minutes ago",
                  description:
                    "Lisinopril 10mg Tablets is running low on stock",
                },
                {
                  icon: <Users className="h-4 w-4 text-blue-600" />,
                  title: "New Customer Registration",
                  time: "1 hour ago",
                  description: "Sarah Wilson registered an account",
                },
                {
                  icon: <Activity className="h-4 w-4 text-red-600" />,
                  title: "Prescription Refill Request",
                  time: "2 hours ago",
                  description: "Michael Brown requested a prescription refill",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-zinc-500">{item.description}</p>
                    <p className="text-xs text-zinc-400 mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button
                variant="ghost"
                className="w-full flex items-center justify-center text-indigo-600"
              >
                View All Activity
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders and Inventory Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Orders</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <CardDescription>
              Latest customer orders from your pharmacy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "#34928",
                  customer: "John Doe",
                  date: "Apr 8, 2025",
                  amount: "$78.50",
                  status: "Completed",
                  statusColor: "bg-green-100 text-green-700",
                },
                {
                  id: "#34927",
                  customer: "Emma Wilson",
                  date: "Apr 7, 2025",
                  amount: "$124.35",
                  status: "Processing",
                  statusColor: "bg-blue-100 text-blue-700",
                },
                {
                  id: "#34926",
                  customer: "Michael Brown",
                  date: "Apr 7, 2025",
                  amount: "$54.20",
                  status: "Completed",
                  statusColor: "bg-green-100 text-green-700",
                },
                {
                  id: "#34925",
                  customer: "Sarah Johnson",
                  date: "Apr 6, 2025",
                  amount: "$92.75",
                  status: "Pending",
                  statusColor: "bg-yellow-100 text-yellow-700",
                },
                {
                  id: "#34924",
                  customer: "Robert Miller",
                  date: "Apr 6, 2025",
                  amount: "$45.60",
                  status: "Completed",
                  statusColor: "bg-green-100 text-green-700",
                },
              ].map((order, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mr-3 text-zinc-600 text-sm font-medium">
                      {order.customer
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-xs text-zinc-500">
                        Order {order.id} • {order.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="font-medium mr-4">{order.amount}</p>
                    <Badge variant="outline" className={order.statusColor}>
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Inventory Status</CardTitle>
              <Button variant="outline" size="sm">
                Manage Inventory
              </Button>
            </div>
            <CardDescription>
              Monitor your inventory levels and stock alerts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Lisinopril 10mg Tablets",
                  sku: "MED-1234",
                  stock: "12",
                  threshold: "20",
                  status: "Low Stock",
                  statusColor: "bg-red-100 text-red-700",
                },
                {
                  name: "Amoxicillin 500mg Capsules",
                  sku: "MED-2345",
                  stock: "45",
                  threshold: "30",
                  status: "In Stock",
                  statusColor: "bg-green-100 text-green-700",
                },
                {
                  name: "Atorvastatin 20mg Tablets",
                  sku: "MED-3456",
                  stock: "28",
                  threshold: "25",
                  status: "In Stock",
                  statusColor: "bg-green-100 text-green-700",
                },
                {
                  name: "Metformin 500mg Tablets",
                  sku: "MED-4567",
                  stock: "15",
                  threshold: "25",
                  status: "Low Stock",
                  statusColor: "bg-red-100 text-red-700",
                },
                {
                  name: "Omeprazole 20mg Capsules",
                  sku: "MED-5678",
                  stock: "0",
                  threshold: "20",
                  status: "Out of Stock",
                  statusColor: "bg-red-100 text-red-700 font-bold",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-zinc-500">SKU: {item.sku}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-right mr-4">
                      <p className="font-medium">{item.stock} units</p>
                      <p className="text-xs text-zinc-500">
                        Min: {item.threshold}
                      </p>
                    </div>
                    <Badge variant="outline" className={item.statusColor}>
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks for your pharmacy operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { icon: <ShoppingCart className="h-5 w-5" />, label: "New Sale" },
              { icon: <Package className="h-5 w-5" />, label: "Add Inventory" },
              { icon: <Users className="h-5 w-5" />, label: "Add Customer" },
              { icon: <Calendar className="h-5 w-5" />, label: "Schedule" },
              { icon: <DollarSign className="h-5 w-5" />, label: "Financials" },
              { icon: <Activity className="h-5 w-5" />, label: "Reports" },
            ].map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-24 flex flex-col items-center justify-center space-y-2"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  {action.icon}
                </div>
                <span>{action.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
