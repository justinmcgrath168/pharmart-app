/**
 * @file components/sections/PricingSection.tsx
 * @description Pricing section showcasing different subscription tiers
 */
"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small independent pharmacies",
      priceMonthly: 99,
      priceYearly: 89,
      features: [
        "eCommerce store with 500 product limit",
        "Basic POS system",
        "Inventory management",
        "Single location support",
        "Email support",
        "Basic analytics",
      ],
      limitations: [
        "No prescription management",
        "Limited staff accounts (2)",
        "Basic reporting",
      ],
    },
    {
      name: "Professional",
      description: "Ideal for growing pharmacy businesses",
      priceMonthly: 199,
      priceYearly: 179,
      popular: true,
      features: [
        "eCommerce store with 2,000 product limit",
        "Advanced POS with prescription handling",
        "Comprehensive inventory management",
        "Up to 3 locations",
        "Priority email & chat support",
        "Advanced analytics & reporting",
        "Staff management (10 accounts)",
        "Basic prescription management",
      ],
      limitations: [
        "Limited insurance integrations",
        "Standard customization options",
      ],
    },
    {
      name: "Enterprise",
      description: "For pharmacy chains and high-volume businesses",
      priceMonthly: 349,
      priceYearly: 299,
      features: [
        "Unlimited products",
        "Full-featured POS system",
        "Multi-location inventory management",
        "Unlimited locations",
        "24/7 priority support with dedicated account manager",
        "Custom reporting & analytics",
        "Unlimited staff accounts",
        "Advanced prescription management",
        "Full insurance integration",
        "White-label customization",
        "API access",
      ],
      limitations: [],
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-zinc-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Transparent Pricing for Every Pharmacy
          </h2>
          <p className="max-w-[700px] text-zinc-500 md:text-xl">
            Choose the plan that fits your business needs. All plans include
            core features with no hidden fees.
          </p>

          <div className="flex items-center space-x-2 mt-6">
            <Label
              htmlFor="billing-toggle"
              className={
                billingCycle === "monthly" ? "text-zinc-900" : "text-zinc-500"
              }
            >
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={billingCycle === "yearly"}
              onCheckedChange={(checked) =>
                setBillingCycle(checked ? "yearly" : "monthly")
              }
            />
            <div className="flex items-center">
              <Label
                htmlFor="billing-toggle"
                className={
                  billingCycle === "yearly" ? "text-zinc-900" : "text-zinc-500"
                }
              >
                Yearly
              </Label>
              <Badge
                variant="outline"
                className="ml-2 bg-green-50 text-green-700 hover:bg-green-50 border-green-200"
              >
                Save 10%
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <Card
              key={i}
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
                      ${plan.priceMonthly - plan.priceYearly} savings per month
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}

                  {plan.limitations.map((limitation, j) => (
                    <li
                      key={`limit-${j}`}
                      className="flex items-start text-zinc-400"
                    >
                      <span className="mr-2 mt-0.5">×</span>
                      <span className="text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
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

        <div className="mt-12 bg-white border border-zinc-200 rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Is there a setup fee?</h4>
              <p className="text-zinc-500 text-sm">
                No, there are no setup fees for any of our plans. You only pay
                the subscription fee.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Can I change plans later?</h4>
              <p className="text-zinc-500 text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect on your next billing cycle.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                What payment methods do you accept?
              </h4>
              <p className="text-zinc-500 text-sm">
                We accept all major credit cards, bank transfers, and selected
                digital payment methods.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Do you offer custom plans?</h4>
              <p className="text-zinc-500 text-sm">
                Yes, please contact our sales team for custom pricing based on
                your specific requirements.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-200 flex justify-center">
            <Button variant="link" className="text-indigo-600">
              View all pricing FAQs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
