/**
 * @file components/sections/features/ManagementFeatures.tsx
 * @description Component showcasing the Management System features
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Package,
  Users,
  BarChart,
  DollarSign,
  Truck,
  FileText,
  Calendar,
  Settings,
} from "lucide-react";

export default function ManagementFeatures() {
  const features = [
    {
      icon: <Package className="h-6 w-6 text-indigo-600" />,
      title: "Inventory Management",
      description:
        "Track stock levels, manage expiration dates, and automate reordering processes.",
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Staff Management",
      description:
        "Manage employees, schedules, roles, and permissions with detailed activity tracking.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-indigo-600" />,
      title: "Analytics & Reporting",
      description:
        "Access comprehensive reports and dashboards for data-driven decision making.",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-indigo-600" />,
      title: "Financial Management",
      description:
        "Track revenue, expenses, profits, and manage reconciliations with your accounting system.",
    },
    {
      icon: <Truck className="h-6 w-6 text-indigo-600" />,
      title: "Supplier Management",
      description:
        "Manage vendor relationships, purchase orders, and receive inventory efficiently.",
    },
    {
      icon: <FileText className="h-6 w-6 text-indigo-600" />,
      title: "Compliance & Documentation",
      description:
        "Maintain proper records and ensure regulatory compliance with automated tracking.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-indigo-600" />,
      title: "Appointment Scheduling",
      description:
        "Manage consultations, vaccinations, and other clinical services with an integrated calendar.",
    },
    {
      icon: <Settings className="h-6 w-6 text-indigo-600" />,
      title: "Store Configuration",
      description:
        "Customize your pharmacy settings, tax rates, delivery options, and more.",
    },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter mb-6">
            Complete Pharmacy Management
          </h2>
          <p className="text-zinc-600 mb-6">
            Take control of your pharmacy operations with our comprehensive
            management system. From inventory and staff management to financial
            tracking and reporting, our platform provides the tools you need to
            run an efficient, profitable pharmacy business.
          </p>
          <p className="text-zinc-600 mb-8">
            Built specifically for pharmacy workflows, our management system
            helps you optimize stock levels, reduce waste, manage compliance
            requirements, and make data-driven decisions to grow your business.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Learn More About Management System
          </Button>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
          {/* This would be replaced with an actual screenshot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-zinc-500">Management System Preview</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-0 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-zinc-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-indigo-50 rounded-xl p-8">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <Package className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Inventory Optimization</h3>
          <p className="text-zinc-600 mb-4">
            Our inventory management system helps you maintain optimal stock
            levels, reducing both stockouts and overstocking situations.
          </p>
          <ul className="space-y-2">
            {[
              "Real-time inventory tracking across all locations",
              "Expiration date management with alerts",
              "Automated reordering based on par levels",
              "Batch tracking and lot number management",
              "Advanced forecasting based on historical data",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-2 text-indigo-600">✓</div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-indigo-50 rounded-xl p-8">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <BarChart className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Analytics & Business Intelligence
          </h3>
          <p className="text-zinc-600 mb-4">
            Turn your pharmacy data into actionable insights with comprehensive
            analytics and reporting tools.
          </p>
          <ul className="space-y-2">
            {[
              "Sales performance by product, category, and time period",
              "Profit margin analysis and optimization",
              "Customer behavior and purchasing patterns",
              "Staff performance metrics",
              "Customizable dashboards and automated reports",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-2 text-indigo-600">✓</div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
