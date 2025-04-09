/**
 * @file components/sections/pricing/PricingTables.tsx
 * @description Pricing table component showing different subscription tiers
 */

"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function PricingTables() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small independent pharmacies",
      priceMonthly: 99,
      priceYearly: 89,
      features: [
        {
          name: "eCommerce store",
          tooltip: "Custom online storefront with product catalog",
          included: "Up to 500 products",
        },
        {
          name: "POS system",
          tooltip: "Point-of-sale system for in-store transactions",
          included: "Basic",
        },
        {
          name: "Inventory management",
          tooltip: "Track and manage your pharmacy inventory",
          included: "Basic",
        },
        {
          name: "Staff accounts",
          tooltip: "Number of staff accounts with system access",
          included: "2 users",
        },
        {
          name: "Customer support",
          tooltip: "Access to our customer support team",
          included: "Email only",
        },
      ],
      limitations: [
        "No prescription management",
        "No insurance processing",
        "No multi-location support",
        "Basic reporting only",
      ],
    },
    {
      name: "Professional",
      description: "Ideal for growing pharmacy businesses",
      priceMonthly: 199,
      priceYearly: 179,
      popular: true,
      features: [
        {
          name: "eCommerce store",
          tooltip: "Custom online storefront with product catalog",
          included: "Up to 2,000 products",
        },
        {
          name: "POS system",
          tooltip: "Point-of-sale system for in-store transactions",
          included: "Advanced with prescription processing",
        },
        {
          name: "Inventory management",
          tooltip: "Track and manage your pharmacy inventory",
          included: "Advanced with expiry tracking",
        },
        {
          name: "Staff accounts",
          tooltip: "Number of staff accounts with system access",
          included: "10 users",
        },
        {
          name: "Customer support",
          tooltip: "Access to our customer support team",
          included: "Email & live chat",
        },
        {
          name: "Prescription management",
          tooltip: "Online prescription refills and management",
          included: "Included",
        },
        {
          name: "Insurance processing",
          tooltip: "Process insurance claims through the system",
          included: "Included",
        },
        {
          name: "Multi-location support",
          tooltip: "Manage multiple pharmacy locations",
          included: "Up to 3 locations",
        },
        {
          name: "Analytics & reporting",
          tooltip: "Business intelligence and reporting tools",
          included: "Advanced reporting",
        },
      ],
      limitations: [
        "No API access",
        "No custom domain",
        "Limited customization options",
      ],
    },
    {
      name: "Enterprise",
      description: "For pharmacy chains and high-volume businesses",
      priceMonthly: 349,
      priceYearly: 299,
      features: [
        {
          name: "eCommerce store",
          tooltip: "Custom online storefront with product catalog",
          included: "Unlimited products",
        },
        {
          name: "POS system",
          tooltip: "Point-of-sale system for in-store transactions",
          included: "Full-featured",
        },
        {
          name: "Inventory management",
          tooltip: "Track and manage your pharmacy inventory",
          included: "Advanced with predictive ordering",
        },
        {
          name: "Staff accounts",
          tooltip: "Number of staff accounts with system access",
          included: "Unlimited users",
        },
        {
          name: "Customer support",
          tooltip: "Access to our customer support team",
          included: "24/7 priority support",
        },
        {
          name: "Prescription management",
          tooltip: "Online prescription refills and management",
          included: "Advanced with workflow automation",
        },
        {
          name: "Insurance processing",
          tooltip: "Process insurance claims through the system",
          included: "Advanced with batch processing",
        },
        {
          name: "Multi-location support",
          tooltip: "Manage multiple pharmacy locations",
          included: "Unlimited locations",
        },
        {
          name: "Analytics & reporting",
          tooltip: "Business intelligence and reporting tools",
          included: "Custom reports & dashboards",
        },
        {
          name: "API access",
          tooltip: "Access to our API for custom integrations",
          included: "Full access",
        },
        {
          name: "Custom domain",
          tooltip: "Use your own domain for your pharmacy store",
          included: "Included",
        },
        {
          name: "White-label customization",
          tooltip: "Customize the platform with your branding",
          included: "Included",
        },
        {
          name: "Dedicated account manager",
          tooltip: "A dedicated account manager for your pharmacy",
          included: "Included",
        },
      ],
      limitations: [],
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <TooltipProvider>
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`flex flex-col ${
                  plan.popular ? "border-indigo-200 shadow-lg relative" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2 right-6 bg-indigo-600">
                    Most Popular
                  </Badge>
                )}

                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">
                      $
                      {billingCycle === "monthly"
                        ? plan.priceMonthly
                        : plan.priceYearly}
                    </span>
                    <span className="text-zinc-500 ml-1">/month</span>
                    {billingCycle === "yearly" && (
                      <p className="text-sm text-green-600 mt-1">
                        ${plan.priceMonthly - plan.priceYearly} savings per
                        month
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase text-zinc-500">
                      What&apos;s included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start">
                          <div className="mr-2 mt-1">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <span className="font-medium">
                                {feature.name}
                              </span>
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="h-3.5 w-3.5 text-zinc-400 ml-1" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">{feature.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <p className="text-sm text-zinc-500">
                              {feature.included}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold uppercase text-zinc-500">
                          Limitations:
                        </h4>
                        <ul className="mt-2 space-y-2">
                          {plan.limitations.map((limitation, j) => (
                            <li
                              key={j}
                              className="flex items-start text-zinc-500 text-sm"
                            >
                              <span className="mr-2">×</span>
                              <span>{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pt-4">
                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-indigo-600 hover:bg-indigo-700" : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise"
                      ? "Contact Sales"
                      : "Start Free Trial"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TooltipProvider>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500 mb-2">
            All plans come with a 14-day free trial. No credit card required.
          </p>
          {/* <div className="flex justify-center">
            <Link
              href="/pricing/comparison"
              className="text-indigo-600 font-medium text-sm hover:underline"
            >
              View detailed plan comparison →
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
