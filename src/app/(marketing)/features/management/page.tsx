/**
 * @file app/(marketing)/features/management/page.tsx
 * @description Dedicated page for Management System features
 */

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Package, BarChart, Users, DollarSign } from "lucide-react";
import FeaturesCallToAction from "@/components/website/sections/features/FeaturesCallToAction";
import ManagementFeatures from "@/components/website/sections/features/ManagementFeatures";

export default function ManagementPage() {
  const benefits = [
    {
      icon: <Package className="h-6 w-6 text-indigo-600" />,
      title: "Optimize Inventory",
      description:
        "Reduce waste and stockouts with data-driven inventory management.",
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Empower Staff",
      description:
        "Give your team the tools they need to work efficiently and serve customers better.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-indigo-600" />,
      title: "Data-Driven Decisions",
      description:
        "Use detailed analytics to make informed business decisions and identify growth opportunities.",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-indigo-600" />,
      title: "Increase Profitability",
      description:
        "Identify high-margin products, optimize pricing, and track financial performance.",
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
                Complete Pharmacy Management
              </h1>
              <p className="text-xl text-zinc-600 mb-8">
                Take control of your pharmacy operations with our comprehensive
                management system designed to optimize every aspect of your
                business.
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
                <p className="text-zinc-500">Management System Preview</p>
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
              Transform Your Pharmacy Operations
            </h2>
            <p className="text-zinc-600">
              Pharmart&apos;s management system gives you the tools to run an
              efficient, profitable pharmacy business.
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
              Management System Features
            </h2>
            <p className="text-zinc-600">
              A comprehensive toolkit for managing every aspect of your pharmacy
              business.
            </p>
          </div>

          <ManagementFeatures />
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Powerful Analytics Dashboard
              </h2>
              <p className="text-zinc-600 mb-6">
                Turn your pharmacy data into actionable insights with our
                comprehensive analytics dashboard. Monitor key performance
                indicators, track sales trends, and identify opportunities for
                growth.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time sales and revenue tracking",
                  "Inventory turnover and stock level analysis",
                  "Prescription volume and type breakdown",
                  "Customer purchasing patterns",
                  "Staff performance metrics",
                  "Customizable reports and data visualizations",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 text-indigo-600">✓</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
              {/* This would be replaced with an actual screenshot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-zinc-500">Analytics Dashboard Preview</p>
              </div>
            </div>
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
                <div className="text-4xl font-bold mb-6">$42,000</div>
                <div className="text-xl mb-4">
                  Annual Savings from Inventory Optimization
                </div>
                <p className="mb-6">
                  &quot;The inventory management system in Pharmart has been a
                  game-changer for our pharmacy. By optimizing our stock levels
                  and reducing waste from expired medications, we&apos;ve saved
                  over $42,000 in the first year alone. The system&apos;s
                  predictive ordering has virtually eliminated stockouts while
                  keeping our inventory lean.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 mr-4"></div>
                  <div>
                    <div className="font-bold">Dr. Robert Chen</div>
                    <div className="text-indigo-200">
                      MediPlus Pharmacy Group
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Key Results</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="font-medium">$42,000 annual savings</div>
                      <p className="text-zinc-600 text-sm">
                        Through reduced waste and optimized purchasing
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="font-medium">
                        22% reduction in inventory costs
                      </div>
                      <p className="text-zinc-600 text-sm">
                        While maintaining 99.5% product availability
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="font-medium">
                        67% faster ordering process
                      </div>
                      <p className="text-zinc-600 text-sm">
                        With automated purchase order generation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <div className="font-medium">
                        18% increase in high-margin product sales
                      </div>
                      <p className="text-zinc-600 text-sm">
                        Through data-driven product placement and staff
                        recommendations
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
