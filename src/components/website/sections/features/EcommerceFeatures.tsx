/**
 * @file components/sections/features/EcommerceFeatures.tsx
 * @description Component showcasing the eCommerce features
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingCart,
  FileText,
  Calendar,
  Bell,
  Search,
  CreditCard,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

export default function EcommerceFeatures() {
  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6 text-indigo-600" />,
      title: "Custom Pharmacy Storefront",
      description:
        "Fully customizable online storefront designed specifically for pharmacies, including prescription and non-prescription products.",
    },
    {
      icon: <FileText className="h-6 w-6 text-indigo-600" />,
      title: "Prescription Management",
      description:
        "Allow customers to upload prescriptions, request refills, and track the status of their medications.",
    },
    {
      icon: <Search className="h-6 w-6 text-indigo-600" />,
      title: "Advanced Product Search",
      description:
        "Powerful search functionality with filters for categories, symptoms, active ingredients, and more.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-indigo-600" />,
      title: "Secure Payment Processing",
      description:
        "Support for multiple payment methods including credit cards, KHQR, and insurance copay processing.",
    },
    {
      icon: <Bell className="h-6 w-6 text-indigo-600" />,
      title: "Refill Reminders",
      description:
        "Automated refill reminders to improve medication adherence and generate repeat business.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-indigo-600" />,
      title: "Subscription Services",
      description:
        "Allow customers to subscribe to regularly needed medications and health products with automated delivery.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-indigo-600" />,
      title: "HIPAA Compliant",
      description:
        "Secure handling of patient information with full HIPAA compliance for peace of mind.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-indigo-600" />,
      title: "Live Chat Support",
      description:
        "Integrated chat support allowing customers to ask questions about products or prescriptions.",
    },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter mb-6">
            Online Pharmacy Store
          </h2>
          <p className="text-zinc-600 mb-6">
            Give your customers a seamless online shopping experience with our
            specialized pharmacy eCommerce platform. Pharmart&apos;s eCommerce
            system is designed specifically for pharmacies, with features for
            prescription management, medication refills, and secure patient
            information handling.
          </p>
          <p className="text-zinc-600 mb-8">
            Our platform helps you extend your reach beyond your physical
            location, serving customers 24/7 and increasing your revenue through
            a broader customer base.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Learn More About eCommerce
          </Button>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
          {/* This would be replaced with an actual screenshot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-zinc-500">eCommerce Platform Preview</p>
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

      <div className="bg-indigo-50 rounded-xl p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Customer Portal</h3>
            <p className="text-zinc-600 mb-4">
              Provide your customers with a personalized portal where they can
              manage their prescriptions, view order history, and set up refill
              reminders.
            </p>
            <ul className="space-y-2">
              {[
                "Secure patient profiles with medication history",
                "Prescription refill requests with just a few clicks",
                "Order tracking and history",
                "Personalized health recommendations",
                "Family member management for caregivers",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-2 text-indigo-600">✓</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
            {/* This would be replaced with an actual screenshot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-zinc-500">Customer Portal Preview</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
