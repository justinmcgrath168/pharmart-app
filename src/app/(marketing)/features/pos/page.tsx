/**
 * @file app/(marketing)/features/pos/page.tsx
 * @description Dedicated page for POS System features
 */

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Scan, Clock, BarChart, Shield } from "lucide-react";
import POSFeatures from "@/components/website/sections/features/POSFeatures";
import FeaturesCallToAction from "@/components/website/sections/features/FeaturesCallToAction";

export default function POSPage() {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      title: "Faster Checkout Process",
      description:
        "Reduce wait times and serve more customers with a streamlined checkout process.",
    },
    {
      icon: <Scan className="h-6 w-6 text-indigo-600" />,
      title: "Reduce Errors",
      description:
        "Barcode scanning and prescription verification helps minimize dispensing errors.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-indigo-600" />,
      title: "Real-time Reporting",
      description:
        "Access sales data and performance metrics in real-time for better decision making.",
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-600" />,
      title: "Regulatory Compliance",
      description:
        "Stay compliant with built-in features for tracking controlled substances and patient information.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/features"
            className="flex items-center text-indigo-600 mb-6 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to All Features
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Pharmacy Point of Sale System
              </h1>
              <p className="text-xl text-zinc-600 mb-8">
                Streamline your in-store operations with a POS system designed
                specifically for pharmacies, handling prescriptions, insurance
                claims, and inventory management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Schedule a Demo
                </Button>
                <Button variant="outline">Start Free Trial</Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
              {/* This would be replaced with an actual screenshot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-zinc-500">POS System Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Benefits of a Pharmacy-Specific POS System
            </h2>
            <p className="text-zinc-600">
              A generic retail POS isn&apos;t enough for pharmacies. Our system
              is built specifically for the unique workflows of pharmacy
              operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-zinc-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              POS System Features
            </h2>
            <p className="text-zinc-600">
              Everything you need to run efficient in-store operations and
              provide excellent customer service.
            </p>
          </div>

          <POSFeatures />
        </div>
      </section>

      {/* Hardware Compatibility */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Compatible Hardware
            </h2>
            <p className="text-zinc-600">
              Pharmart&apos;s POS system works with a wide range of hardware
              devices for a seamless checkout experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Barcode Scanners",
                description: "Compatible with most 1D and 2D barcode scanners.",
              },
              {
                name: "Receipt Printers",
                description: "Works with thermal and impact receipt printers.",
              },
              {
                name: "Cash Drawers",
                description:
                  "Supports standard-size cash drawers with automatic opening.",
              },
              {
                name: "Card Terminals",
                description:
                  "Integrates with major payment terminals including KHQR.",
              },
              {
                name: "Label Printers",
                description: "Compatible with prescription label printers.",
              },
              {
                name: "Touchscreen Displays",
                description:
                  "Supports various touchscreen monitors and tablets.",
              },
              {
                name: "Customer Displays",
                description:
                  "Optional second screen for customer-facing information.",
              },
              {
                name: "Signature Pads",
                description:
                  "For capturing electronic signatures for prescriptions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200"
              >
                <h3 className="font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">
              View Full Hardware Compatibility List
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Success Story */}
      <section className="py-12 md:py-24 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-indigo-600 p-8 text-white">
                <div className="text-2xl font-bold mb-4">
                  Customer Success Story
                </div>
                <div className="text-4xl font-bold mb-6">42%</div>
                <div className="text-xl mb-4">
                  Faster Prescription Processing
                </div>
                <p className="mb-6">
                  &quot;Pharmart&apos;s POS system has completely transformed
                  our checkout process. We&apos;re now able to process
                  prescriptions 42% faster than before, which has significantly
                  reduced wait times and improved customer satisfaction. The
                  insurance processing feature alone has saved our staff
                  countless hours of manual work.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 mr-4"></div>
                  <div>
                    <div className="font-bold">James Wilson</div>
                    <div className="text-indigo-200">
                      Wilson Family Pharmacy
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Key Improvements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="font-medium">
                        42% faster prescription processing
                      </div>
                      <p className="text-zinc-600 text-sm">
                        Reduced average transaction time from 7 minutes to 4
                        minutes
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="font-medium">
                        67% fewer insurance claim rejections
                      </div>
                      <p className="text-zinc-600 text-sm">
                        Real-time verification prevents common errors
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="font-medium">
                        28% increase in customer satisfaction
                      </div>
                      <p className="text-zinc-600 text-sm">
                        Measured through post-transaction surveys
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="font-medium">
                        12 hours saved per week on reporting
                      </div>
                      <p className="text-zinc-600 text-sm">
                        Automated sales and inventory reporting
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    Read Full Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <FeaturesCallToAction />
    </main>
  );
}
