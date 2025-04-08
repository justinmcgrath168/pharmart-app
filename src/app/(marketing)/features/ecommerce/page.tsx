/**
 * @file app/(marketing)/features/ecommerce/page.tsx
 * @description Dedicated page for eCommerce features
 */

import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  ArrowLeft,
  ShoppingCart,
  FileText,
  Users,
  ShieldCheck,
} from "lucide-react";
import FeaturesCallToAction from "@/components/website/sections/features/FeaturesCallToAction";
import EcommerceFeatures from "@/components/website/sections/features/EcommerceFeatures";

export default function EcommercePage() {
  const benefits = [
    {
      icon: <ShoppingCart className="h-6 w-6 text-indigo-600" />,
      title: "Expand Your Reach",
      description:
        "Serve customers beyond your local area and generate sales 24/7 with an online presence.",
    },
    {
      icon: <FileText className="h-6 w-6 text-indigo-600" />,
      title: "Streamline Prescription Refills",
      description:
        "Allow customers to request refills online, reducing phone calls and wait times.",
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Improve Customer Experience",
      description:
        "Provide a convenient way for customers to browse products and manage their medications.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-indigo-600" />,
      title: "Secure and Compliant",
      description:
        "Our platform is fully HIPAA compliant, ensuring patient data is protected at all times.",
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
                Online Pharmacy Store
              </h1>
              <p className="text-xl text-zinc-600 mb-8">
                Extend your pharmacy&apos;s reach with a fully-featured online
                store designed specifically for medication sales and
                prescription management.
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
                <p className="text-zinc-500">eCommerce Platform Preview</p>
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
              Why Your Pharmacy Needs an Online Store
            </h2>
            <p className="text-zinc-600">
              In today&apos;s digital world, customers expect to be able to shop
              online. Our eCommerce platform helps you meet those expectations.
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
              eCommerce Features
            </h2>
            <p className="text-zinc-600">
              Everything you need to sell products, manage prescriptions, and
              serve your customers online.
            </p>
          </div>

          <EcommerceFeatures />
        </div>
      </section>

      {/* Customer Success Story */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-indigo-600 p-8 text-white">
                <div className="text-2xl font-bold mb-4">
                  Customer Success Story
                </div>
                <div className="text-4xl font-bold mb-6">230%</div>
                <div className="text-xl mb-4">Increase in Online Sales</div>
                <p className="mb-6">
                  &quot;Since implementing Pharmart&apos;s eCommerce platform,
                  our online sales have increased by 230%. The prescription
                  refill feature has been particularly popular with our elderly
                  customers, who appreciate being able to request refills
                  without having to call or visit the store.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 mr-4"></div>
                  <div>
                    <div className="font-bold">Lisa Rodriguez</div>
                    <div className="text-indigo-200">
                      Community Health Pharmacy
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">How They Did It</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <div className="font-medium">Launched Online Store</div>
                      <p className="text-zinc-600 text-sm">
                        Set up their custom storefront with Pharmart&apos;s
                        templates
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <div className="font-medium">
                        Implemented Refill System
                      </div>
                      <p className="text-zinc-600 text-sm">
                        Activated the prescription refill feature for existing
                        customers
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <div className="font-medium">Promoted to Customers</div>
                      <p className="text-zinc-600 text-sm">
                        Used in-store signage and email marketing to announce
                        the new online store
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <div className="font-medium">Optimized for Search</div>
                      <p className="text-zinc-600 text-sm">
                        Used Pharmart&apos;s SEO tools to improve visibility in
                        local searches
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
