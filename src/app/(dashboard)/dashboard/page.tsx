/**
 * @file app/(dashboard)/dashboard/page.tsx
 * @description Main dashboard overview page with responsive layout
 */

"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashboardChart from "@/components/dashboard/charts/DashboardChart";
import DashboardPieChart from "@/components/dashboard/charts/DashboardPieChart";

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState<string>("7days");

  // Simulate data for charts and stats - would come from API in real implementation
  const salesData = [
    { name: "Mon", sales: 4000, online: 2400, offline: 1600 },
    { name: "Tue", sales: 3500, online: 2210, offline: 1290 },
    { name: "Wed", sales: 5000, online: 3200, offline: 1800 },
    { name: "Thu", sales: 4500, online: 2800, offline: 1700 },
    { name: "Fri", sales: 5500, online: 3500, offline: 2000 },
    { name: "Sat", sales: 6500, online: 4000, offline: 2500 },
    { name: "Sun", sales: 4200, online: 2300, offline: 1900 },
  ];

  const categoryData = [
    { name: "Prescription", value: 42 },
    { name: "OTC Medications", value: 28 },
    { name: "Health & Wellness", value: 18 },
    { name: "Personal Care", value: 12 },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "order",
      title: "New Online Order #34928",
      time: "10 minutes ago",
      description: "John Doe placed a new order for $78.50",
      icon: <ShoppingCart className="h-4 w-4 text-green-600" />,
    },
    {
      id: 2,
      type: "inventory",
      title: "Inventory Alert",
      time: "45 minutes ago",
      description: "Lisinopril 10mg Tablets is running low on stock",
      icon: <AlertCircle className="h-4 w-4 text-orange-600" />,
    },
    {
      id: 3,
      type: "customer",
      title: "New Customer Registration",
      time: "1 hour ago",
      description: "Sarah Wilson registered an account",
      icon: <Users className="h-4 w-4 text-blue-600" />,
    },
    {
      id: 4,
      type: "prescription",
      title: "Prescription Refill Request",
      time: "2 hours ago",
      description: "Michael Brown requested a prescription refill",
      icon: <Activity className="h-4 w-4 text-red-600" />,
    },
  ];

  const topProducts = [
    {
      id: 1,
      name: "Lisinopril 10mg Tablets",
      category: "Prescription",
      sales: 187,
      change: 12.5,
    },
    {
      id: 2,
      name: "Vitamin D3 5000IU",
      category: "OTC Medications",
      sales: 154,
      change: 8.3,
    },
    {
      id: 3,
      name: "Acetaminophen 500mg",
      category: "OTC Medications",
      sales: 132,
      change: -4.2,
    },
    {
      id: 4,
      name: "Blood Pressure Monitor",
      category: "Health & Wellness",
      sales: 98,
      change: 15.7,
    },
  ];

  return (
    <div>
      {/* Dashboard Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back, John. Here&apos;s an overview of your pharmacy.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Sales Overview Chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>
                  Monitor your sales performance over time
                </CardDescription>
              </div>
              <Tabs defaultValue="weekly" className="w-auto">
                <TabsList className="grid w-36 grid-cols-2">
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] mt-4">
              <DashboardChart data={salesData} />
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest updates from your pharmacy
                </CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View all activity</DropdownMenuItem>
                  <DropdownMenuItem>Filter activity</DropdownMenuItem>
                  <DropdownMenuItem>Export log</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center mr-3">
                    {activity.icon}
                  </div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-zinc-500">
                      {activity.description}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">
                      {activity.time}
                    </p>
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

      {/* Secondary Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Top Products */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>
              Best selling products in your pharmacy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {topProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <div className="flex items-center text-sm text-zinc-500">
                      <span className="mr-2">{product.category}</span>
                      <span>·</span>
                      <span className="ml-2">{product.sales} units sold</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`text-sm font-medium flex items-center ${
                        product.change > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {product.change > 0 ? (
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                      )}
                      {Math.abs(product.change)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-6" />
            <div className="flex justify-between items-center">
              <p className="text-sm text-zinc-500">Showing 4 of 20 products</p>
              <Button variant="ghost" size="sm" className="text-indigo-600">
                View All Products
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sales by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
            <CardDescription>Product category distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <DashboardPieChart data={categoryData} />
            </div>
            <div className="space-y-4 mt-6">
              {categoryData.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium">{category.name}</div>
                    <div className="text-sm text-zinc-500">
                      {category.value}%
                    </div>
                  </div>
                  <Progress value={category.value} className="h-2" />
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
