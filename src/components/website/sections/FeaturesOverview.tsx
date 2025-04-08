/**
 * @file components/sections/FeaturesOverview.tsx
 * @description Features overview section showcasing the three main products
 */
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";

export default function FeaturesOverview() {
  const [activeTab, setActiveTab] = useState("ecommerce");

  const features = {
    ecommerce: [
      "Custom pharmacy storefront with prescription handling",
      "Secure patient accounts and medical history",
      "KHQR payment integration",
      "Automated prescription refill system",
      "Customer loyalty program",
      "Mobile-responsive design",
    ],
    pos: [
      "Barcode/QR scanning for quick checkout",
      "Prescription processing and verification",
      "Insurance processing and co-pay calculation",
      "Multi-payment method support",
      "Digital receipt generation",
      "Inventory synchronization",
    ],
    management: [
      "Comprehensive inventory management with expiry tracking",
      "Staff management with role-based access",
      "Advanced analytics and reporting",
      "Supplier and purchase order management",
      "Financial tracking and reconciliation",
      "Compliance and regulatory reporting",
    ],
  };

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            One Platform, Complete Pharmacy Management
          </h2>
          <p className="max-w-[700px] text-zinc-500 md:text-xl">
            Pharmart combines three essential systems into one seamless
            platform, eliminating the need for multiple software solutions.
          </p>
        </div>

        <Tabs
          defaultValue="ecommerce"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="ecommerce">eCommerce</TabsTrigger>
              <TabsTrigger value="pos">POS System</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="ecommerce" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">
                  Online Pharmacy Store
                </h3>
                <p className="text-zinc-500 mb-6">
                  Give your customers a seamless online shopping experience with
                  our specialized pharmacy eCommerce platform.
                </p>
                <ul className="space-y-3">
                  {features.ecommerce.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 bg-indigo-600 hover:bg-indigo-700">
                  Learn More About eCommerce
                </Button>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-zinc-100 animate-pulse"></div>
                  {/* This would be replaced with an actual screenshot or mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-zinc-400">eCommerce Platform Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pos" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">
                  Point of Sale System
                </h3>
                <p className="text-zinc-500 mb-6">
                  A powerful POS system designed specifically for pharmacies,
                  with prescription handling and insurance processing.
                </p>
                <ul className="space-y-3">
                  {features.pos.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 bg-indigo-600 hover:bg-indigo-700">
                  Learn More About POS
                </Button>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-zinc-100 animate-pulse"></div>
                  {/* This would be replaced with an actual screenshot or mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-zinc-400">POS System Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="management" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Pharmacy Management</h3>
                <p className="text-zinc-500 mb-6">
                  Complete back-office solution with inventory, staff, and
                  financial management tools tailored for pharmacies.
                </p>
                <ul className="space-y-3">
                  {features.management.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 bg-indigo-600 hover:bg-indigo-700">
                  Learn More About Management
                </Button>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-zinc-100 animate-pulse"></div>
                  {/* This would be replaced with an actual screenshot or mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-zinc-400">Management System Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
