/**
 * @file app/(marketing)/pricing/comparison/page.tsx
 * @description Detailed plan comparison page
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, X, ArrowLeft, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PricingCTA from "@/components/website/pricing/PricingCTA";

export default function PlanComparisonPage() {
  const featureCategories = [
    {
      name: "eCommerce Features",
      features: [
        {
          name: "Online storefront",
          tooltip: "Custom pharmacy storefront with product listings.",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Premium",
        },
        {
          name: "Product catalog limit",
          tooltip: "Maximum number of products in your online store.",
          starter: "500 products",
          professional: "2,000 products",
          enterprise: "Unlimited",
        },
        {
          name: "Prescription management",
          tooltip: "Allow customers to upload and manage prescriptions online.",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Refill reminders",
          tooltip: "Automated refill reminders for customers.",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Medication information",
          tooltip: "Provide detailed medication information to customers.",
          starter: "Basic",
          professional: "Detailed",
          enterprise: "Comprehensive",
        },
        {
          name: "Custom domain",
          tooltip: "Use your own domain for your pharmacy store.",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Search functionality",
          tooltip: "Search capabilities for your online store.",
          starter: "Basic",
          professional: "Advanced filters",
          enterprise: "Advanced filters & recommendations",
        },
        {
          name: "Mobile-responsive design",
          tooltip: "Optimized for mobile devices.",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Custom mobile app",
          tooltip: "Dedicated mobile app for your pharmacy.",
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
    {
      name: "POS Features",
      features: [
        {
          name: "Barcode scanning",
          tooltip: "Scan product barcodes for quick checkout.",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Prescription processing",
          tooltip: "Process and track prescriptions through the POS system.",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Full-featured",
        },
        {
          name: "Insurance processing",
          tooltip: "Process insurance claims directly through the POS.",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Multi-payment methods",
          tooltip:
            "Accept various payment methods including KHQR, cards, and cash.",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Digital receipts",
          tooltip: "Send receipts via email or SMS.",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Customer profiles",
          tooltip: "Store customer information for quick access.",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Comprehensive",
        },
        {
          name: "Register devices",
          tooltip: "Number of POS devices supported.",
          starter: "1 device",
          professional: "Up to 3 devices",
          enterprise: "Unlimited",
        },
        {
          name: "Returns & refunds",
          tooltip: "Process returns and refunds.",
          starter: true,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      name: "Management Features",
      features: [
        {
          name: "Inventory management",
          tooltip: "Track and manage your pharmacy inventory.",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Full-featured",
        },
        {
          name: "Expiration date tracking",
          tooltip: "Track product expiration dates.",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Automated reordering",
          tooltip:
            "Automatically generate purchase orders based on inventory levels.",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Multi-location support",
          tooltip: "Manage multiple pharmacy locations from one account.",
          starter: false,
          professional: "Up to 3 locations",
          enterprise: "Unlimited",
        },
        {
          name: "Staff accounts",
          tooltip: "Number of staff accounts with system access.",
          starter: "2 users",
          professional: "10 users",
          enterprise: "Unlimited",
        },
        {
          name: "Role-based access",
          tooltip: "Assign different access levels to staff members.",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Custom roles",
        },
        {
          name: "Analytics & reporting",
          tooltip: "Business intelligence and reporting capabilities.",
          starter: "Basic reports",
          professional: "Advanced analytics",
          enterprise: "Custom reports",
        },
        {
          name: "Financial tracking",
          tooltip: "Track revenue, expenses, and profits.",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Comprehensive",
        },
        {
          name: "Supplier management",
          tooltip: "Manage vendors and purchase orders.",
          starter: false,
          professional: true,
          enterprise: true,
        },
      ],
    },
    {
      name: "Support & Services",
      features: [
        {
          name: "Implementation support",
          tooltip: "Help getting set up and running.",
          starter: "Self-guided",
          professional: "Guided setup",
          enterprise: "White-glove service",
        },
        {
          name: "Customer support",
          tooltip: "Access to customer support services.",
          starter: "Email only",
          professional: "Email & chat",
          enterprise: "24/7 priority support",
        },
        {
          name: "Training",
          tooltip: "Training for you and your staff.",
          starter: "Documentation",
          professional: "Webinars",
          enterprise: "On-site training",
        },
        {
          name: "Dedicated account manager",
          tooltip: "A dedicated account manager for your pharmacy.",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "API access",
          tooltip: "Access to Pharmart APIs for custom integrations.",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Custom development",
          tooltip: "Custom development services for specific needs.",
          starter: false,
          professional: "Available at extra cost",
          enterprise: "Available",
        },
      ],
    },
  ];

  return (
    <main>
      {/* Header Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/pricing"
            className="flex items-center text-indigo-600 mb-6 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Pricing
          </Link>

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Detailed Plan Comparison
            </h1>
            <p className="text-xl text-zinc-600 mb-10">
              Compare all features across our plans to find the perfect fit for
              your pharmacy.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <TooltipProvider>
            <div className="overflow-x-auto">
              <Table className="w-full border border-separate border-spacing-0 rounded-lg overflow-hidden">
                <TableHeader className="bg-zinc-50 sticky top-0 z-10">
                  <TableRow>
                    <TableHead className="w-[300px] bg-white">
                      <div className="font-bold text-lg p-4">Features</div>
                    </TableHead>
                    <TableHead className="w-[200px] text-center bg-white border-l">
                      <div className="font-bold p-4">
                        <div>Starter</div>
                        <div className="text-sm text-zinc-500">$99/month</div>
                      </div>
                    </TableHead>
                    <TableHead className="w-[200px] text-center bg-indigo-50 border-l">
                      <div className="font-bold p-4">
                        <Badge className="mb-1 bg-indigo-600">Popular</Badge>
                        <div>Professional</div>
                        <div className="text-sm text-zinc-500">$199/month</div>
                      </div>
                    </TableHead>
                    <TableHead className="w-[200px] text-center bg-white border-l">
                      <div className="font-bold p-4">
                        <div>Enterprise</div>
                        <div className="text-sm text-zinc-500">$349/month</div>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {featureCategories.map((category, categoryIndex) => (
                    <>
                      <TableRow
                        key={`category-${categoryIndex}`}
                        className="bg-zinc-100"
                      >
                        <TableCell
                          colSpan={4}
                          className="font-bold border-b px-4 py-3"
                        >
                          {category.name}
                        </TableCell>
                      </TableRow>
                      {category.features.map((feature, featureIndex) => (
                        <TableRow
                          key={`feature-${categoryIndex}-${featureIndex}`}
                        >
                          <TableCell className="border-b px-4 py-3">
                            <div className="flex items-center">
                              {feature.name}
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <HelpCircle className="h-4 w-4 ml-2 text-zinc-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">{feature.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </TableCell>
                          <TableCell className="text-center border-b border-l px-4 py-3">
                            {typeof feature.starter === "boolean" ? (
                              feature.starter ? (
                                <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span>{feature.starter}</span>
                            )}
                          </TableCell>
                          <TableCell className="text-center border-b border-l px-4 py-3 bg-indigo-50">
                            {typeof feature.professional === "boolean" ? (
                              feature.professional ? (
                                <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span>{feature.professional}</span>
                            )}
                          </TableCell>
                          <TableCell className="text-center border-b border-l px-4 py-3">
                            {typeof feature.enterprise === "boolean" ? (
                              feature.enterprise ? (
                                <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span>{feature.enterprise}</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TooltipProvider>

          <div className="mt-12 text-center">
            <p className="text-zinc-600 mb-6">
              Ready to get started? Choose the plan that&apos;s right for your
              pharmacy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Start Free Trial
              </Button>
              <Button variant="outline">Schedule a Demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 md:py-24 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Additional Information
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Plan Upgrades & Downgrades
                </h3>
                <p className="text-zinc-600 mb-3">
                  You can upgrade your plan at any time, and the changes will
                  take effect immediately. When upgrading, you&apos;ll only be
                  charged the prorated difference for the remainder of your
                  billing cycle.
                </p>
                <p className="text-zinc-600">
                  Downgrades take effect at the end of your current billing
                  cycle. Your data and settings will be preserved when switching
                  between plans, but you may lose access to certain features
                  based on your new plan&apos;s limitations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Billing & Payment</h3>
                <p className="text-zinc-600 mb-3">
                  We offer both monthly and annual billing options. Annual
                  billing comes with a 10% discount compared to monthly billing.
                  We accept all major credit cards, bank transfers, and select
                  digital payment methods including KHQR.
                </p>
                <p className="text-zinc-600">
                  For Enterprise plans, we also offer invoicing with net-30
                  payment terms. All prices are listed in USD and do not include
                  applicable taxes, which will be calculated based on your
                  location.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Free Trial Details</h3>
                <p className="text-zinc-600 mb-3">
                  All plans come with a 14-day free trial with full access to
                  all features. No credit card is required to start your trial.
                  You can upgrade, downgrade, or cancel your trial at any time
                  with no obligation.
                </p>
                <p className="text-zinc-600">
                  During your trial, you&apos;ll have access to all features of
                  the Professional plan, with the option to test Enterprise
                  features upon request. We&apos;ll send reminders before your
                  trial expires, and you won&apos;t be charged automatically
                  when it ends.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">
                  Implementation & Support
                </h3>
                <p className="text-zinc-600 mb-3">
                  Implementation support varies by plan. The Starter plan
                  includes self-guided setup with documentation. The
                  Professional plan includes guided setup with a dedicated
                  implementation specialist. The Enterprise plan includes full
                  white-glove implementation with custom configuration, data
                  migration, and staff training.
                </p>
                <p className="text-zinc-600">
                  All plans include access to our knowledge base and community
                  forum. The Starter plan includes email support with a 24-hour
                  response time. The Professional plan adds live chat support
                  with a 4-hour response time. The Enterprise plan includes 24/7
                  priority support with a 1-hour response time and a dedicated
                  account manager.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <PricingCTA />
    </main>
  );
}
