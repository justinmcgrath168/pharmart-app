/**
 * @file components/sections/features/POSFeatures.tsx
 * @description Component showcasing the Point of Sale features
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scan,
  FileText,
  Users,
  CreditCard,
  Printer,
  Search,
  BarChart,
  RefreshCw,
} from "lucide-react";

export default function POSFeatures() {
  const features = [
    {
      icon: <Scan className="h-6 w-6 text-indigo-600" />,
      title: "Barcode/QR Scanning",
      description:
        "Quickly scan products and prescriptions for fast and accurate checkout process.",
    },
    {
      icon: <FileText className="h-6 w-6 text-indigo-600" />,
      title: "Prescription Processing",
      description:
        "Handle prescription verification, insurance claims, and medication dispensing all in one system.",
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Customer Management",
      description:
        "Maintain customer profiles with prescription history, insurance information, and preferences.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-indigo-600" />,
      title: "Multi-Payment Processing",
      description:
        "Accept various payment methods including cash, cards, KHQR, and process insurance copays.",
    },
    {
      icon: <Printer className="h-6 w-6 text-indigo-600" />,
      title: "Digital Receipts",
      description:
        "Offer customers the option of printed or digital receipts sent via email or SMS.",
    },
    {
      icon: <Search className="h-6 w-6 text-indigo-600" />,
      title: "Inventory Lookup",
      description:
        "Instantly check stock levels, locate products, and view detailed information.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-indigo-600" />,
      title: "Sales Reporting",
      description:
        "Generate detailed sales reports, analyze trends, and track employee performance.",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-indigo-600" />,
      title: "Returns & Refunds",
      description:
        "Process returns and refunds smoothly with proper documentation and inventory updates.",
    },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter mb-6">
            Pharmacy Point of Sale System
          </h2>
          <p className="text-zinc-600 mb-6">
            Streamline your in-store operations with a POS system designed
            specifically for pharmacies. Process prescriptions, handle insurance
            claims, and manage customer interactions with a user-friendly
            interface that reduces training time and minimizes errors.
          </p>
          <p className="text-zinc-600 mb-8">
            Pharmart&apos;s POS system integrates seamlessly with the inventory
            management and eCommerce platform, ensuring consistent data across
            all channels and providing a unified customer experience.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Learn More About POS System
          </Button>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
          {/* This would be replaced with an actual screenshot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-zinc-500">POS System Preview</p>
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
            <h3 className="text-2xl font-bold mb-4">Prescription Workflow</h3>
            <p className="text-zinc-600 mb-4">
              Our specialized prescription processing workflow streamlines the
              entire process from receiving prescriptions to dispensing
              medications.
            </p>
            <ol className="space-y-4">
              {[
                {
                  title: "Prescription Intake",
                  description:
                    "Scan paper prescriptions or receive electronic prescriptions directly into the system.",
                },
                {
                  title: "Verification & Processing",
                  description:
                    "Verify prescription details, check for interactions, and process insurance claims.",
                },
                {
                  title: "Filling & Checking",
                  description:
                    "Fill prescriptions with barcode verification to ensure accuracy.",
                },
                {
                  title: "Patient Counseling",
                  description:
                    "Record counseling notes and capture digital signatures.",
                },
                {
                  title: "Dispensing & Payment",
                  description:
                    "Complete the transaction with flexible payment options and automatic inventory updates.",
                },
              ].map((step, index) => (
                <li key={index} className="flex">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{step.title}</h4>
                    <p className="text-sm text-zinc-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
            {/* This would be replaced with an actual screenshot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-zinc-500">Prescription Workflow Preview</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
