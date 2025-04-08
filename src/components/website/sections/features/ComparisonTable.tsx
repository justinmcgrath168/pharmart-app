/**
 * @file components/sections/features/ComparisonTable.tsx
 * @description Comparison table of features across different subscription tiers
 */

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, X, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ComparisonTable() {
  const features = [
    {
      category: "eCommerce Features",
      items: [
        {
          name: "Online Storefront",
          tooltip: "Customizable online pharmacy store with product listings.",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Product Catalog",
          tooltip:
            "Number of products that can be listed in your online store.",
          starter: "500 Products",
          professional: "2,000 Products",
          enterprise: "Unlimited",
        },
        {
          name: "Prescription Management",
          tooltip: "Allow customers to upload and manage prescriptions online.",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Custom Domain",
          tooltip: "Use your own domain for your pharmacy store.",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Mobile App",
          tooltip: "Custom mobile app for your pharmacy.",
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
    {
      category: "POS Features",
      items: [
        {
          name: "Barcode Scanning",
          tooltip: "Scan product barcodes for quick checkout.",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Prescription Processing",
          tooltip: "Process and track prescriptions through the POS system.",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Full-Featured",
        },
        {
          name: "Insurance Processing",
          tooltip: "Process insurance claims directly through the POS.",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Multi-Payment Methods",
          tooltip:
            "Accept various payment methods including KHQR, cards, and cash.",
          starter: true,
          professional: true,
          enterprise: true,
        },
        {
          name: "Register Devices",
          tooltip: "Number of POS devices supported.",
          starter: "1 Device",
          professional: "Up to 3 Devices",
          enterprise: "Unlimited",
        },
      ],
    },
    {
      category: "Management Features",
      items: [
        {
          name: "Inventory Management",
          tooltip: "Track and manage your pharmacy inventory.",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Full-Featured",
        },
        {
          name: "Staff Accounts",
          tooltip: "Number of staff accounts with system access.",
          starter: "2 Users",
          professional: "10 Users",
          enterprise: "Unlimited",
        },
        {
          name: "Analytics & Reporting",
          tooltip: "Business intelligence and reporting capabilities.",
          starter: "Basic Reports",
          professional: "Advanced Analytics",
          enterprise: "Custom Reports",
        },
        {
          name: "Supplier Management",
          tooltip: "Manage vendors and purchase orders.",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          name: "Multi-Location Support",
          tooltip: "Manage multiple pharmacy locations from one account.",
          starter: false,
          professional: "Up to 3 Locations",
          enterprise: "Unlimited",
        },
      ],
    },
    {
      category: "Support & Services",
      items: [
        {
          name: "Customer Support",
          tooltip: "Access to customer support services.",
          starter: "Email Only",
          professional: "Email & Chat",
          enterprise: "24/7 Priority Support",
        },
        {
          name: "Training",
          tooltip: "Training services for you and your staff.",
          starter: "Self-Service",
          professional: "Group Sessions",
          enterprise: "Dedicated Training",
        },
        {
          name: "Implementation",
          tooltip: "Assistance with setting up your Pharmart system.",
          starter: "Self-Setup",
          professional: "Guided Setup",
          enterprise: "White-Glove Service",
        },
        {
          name: "API Access",
          tooltip: "Access to Pharmart APIs for custom integrations.",
          starter: false,
          professional: false,
          enterprise: true,
        },
        {
          name: "Dedicated Account Manager",
          tooltip: "A dedicated account manager for your pharmacy.",
          starter: false,
          professional: false,
          enterprise: true,
        },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Compare Features Across Plans
          </h2>
          <p className="text-zinc-600">
            Choose the plan that best fits your pharmacy&apos;s needs and
            budget. All plans include core features with no hidden fees.
          </p>
        </div>

        <div className="overflow-auto">
          <TooltipProvider>
            <Table className="border rounded-lg border-separate border-spacing-0 overflow-hidden">
              <TableHeader className="bg-zinc-100">
                <TableRow>
                  <TableHead className="w-1/4 p-4 text-left font-bold border-b">
                    Features
                  </TableHead>
                  <TableHead className="w-1/4 p-4 text-center font-bold border-b border-l">
                    <div className="flex flex-col items-center">
                      <span>Starter</span>
                      <span className="text-sm font-normal text-zinc-500">
                        $99/month
                      </span>
                    </div>
                  </TableHead>
                  <TableHead className="w-1/4 p-4 text-center font-bold border-b border-l bg-indigo-50">
                    <div className="flex flex-col items-center">
                      <Badge className="mb-1 bg-indigo-600">Popular</Badge>
                      <span>Professional</span>
                      <span className="text-sm font-normal text-zinc-500">
                        $199/month
                      </span>
                    </div>
                  </TableHead>
                  <TableHead className="w-1/4 p-4 text-center font-bold border-b border-l">
                    <div className="flex flex-col items-center">
                      <span>Enterprise</span>
                      <span className="text-sm font-normal text-zinc-500">
                        $349/month
                      </span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((category, categoryIndex) => (
                  <>
                    <TableRow
                      key={`category-${categoryIndex}`}
                      className="bg-zinc-50"
                    >
                      <TableCell colSpan={4} className="p-4 font-bold border-b">
                        {category.category}
                      </TableCell>
                    </TableRow>
                    {category.items.map((feature, featureIndex) => (
                      <TableRow
                        key={`feature-${categoryIndex}-${featureIndex}`}
                      >
                        <TableCell className="p-4 border-b">
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
                        <TableCell className="p-4 text-center border-b border-l">
                          {typeof feature.starter === "boolean" ? (
                            feature.starter ? (
                              <Check className="h-5 w-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span>{feature.starter}</span>
                          )}
                        </TableCell>
                        <TableCell className="p-4 text-center border-b border-l bg-indigo-50">
                          {typeof feature.professional === "boolean" ? (
                            feature.professional ? (
                              <Check className="h-5 w-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span>{feature.professional}</span>
                          )}
                        </TableCell>
                        <TableCell className="p-4 text-center border-b border-l">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="h-5 w-5 text-green-600 mx-auto" />
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
          </TooltipProvider>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-8">
          <p className="text-zinc-600 mb-6">
            Not sure which plan is right for you? Schedule a demo with our team
            to get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 cursor-pointer">
              Schedule a Demo
            </div>
            <div className="rounded-lg bg-white border border-zinc-300 px-4 py-2 font-medium hover:bg-zinc-50 cursor-pointer">
              View Full Pricing Details
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
