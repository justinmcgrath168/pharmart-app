/**
 * @file src/components/forms/signup/subscription-plan-form.tsx
 * Subscription plan selection form for the fourth step of signup process
 */
"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SignupData } from "@/lib/validators/signup";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Star,
  Zap,
  Building2,
  CheckIcon,
  InfoIcon,
} from "lucide-react";

// Subscription plans
const SUBSCRIPTION_PLANS = [
  {
    id: "basic",
    title: "Basic",
    price: "$29",
    billingPeriod: "per month",
    description: "Essential tools for small independent pharmacies",
    features: [
      "Online store with up to 500 products",
      "Basic inventory management",
      "Standard POS system",
      "Email support",
      "Mobile responsive storefront",
      "Basic analytics and reporting",
    ],
    badge: null,
    icon: Building2,
  },
  {
    id: "professional",
    title: "Professional",
    price: "$79",
    billingPeriod: "per month",
    description: "Advanced tools for growing pharmacies",
    features: [
      "Online store with unlimited products",
      "Advanced inventory management",
      "Full-featured POS system",
      "Priority email and chat support",
      "Custom domain name",
      "Advanced analytics and reporting",
      "Multi-staff accounts",
      "Prescription refill reminders",
      "Customer loyalty program",
    ],
    badge: "Popular",
    icon: Star,
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: "$199",
    billingPeriod: "per month",
    description: "Complete solution for pharmacy chains",
    features: [
      "Everything in Professional plan",
      "Multiple store locations",
      "API access for custom integrations",
      "Dedicated account manager",
      "24/7 premium support",
      "Custom branding options",
      "Advanced security features",
      "Bulk import/export tools",
      "Priority feature updates",
    ],
    badge: null,
    icon: Zap,
  },
];

const SubscriptionPlanForm = () => {
  const form = useFormContext<SignupData>();

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-2 pb-4">
        <InfoIcon className="h-5 w-5 mt-0.5 text-amber-500" />
        <div className="text-sm text-muted-foreground">
          <p>
            Choose the plan that best fits your pharmacy needs. You can upgrade
            or downgrade your plan at any time.
          </p>
          <p className="mt-1">
            All plans include a <strong>14-day free trial</strong> - no credit
            card required to get started.
          </p>
        </div>
      </div>

      <FormField
        control={form.control}
        name="subscriptionPlan"
        render={({ field }) => (
          <FormItem className="space-y-6">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid gap-6 md:grid-cols-3"
              >
                {SUBSCRIPTION_PLANS.map((plan) => (
                  <Card
                    key={plan.id}
                    className={`relative overflow-hidden cursor-pointer transition-all hover:border-primary ${
                      field.value === plan.id ? "border-2 border-primary" : ""
                    }`}
                    onClick={() => field.onChange(plan.id)}
                  >
                    {plan.badge && (
                      <Badge
                        className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg"
                        variant="default"
                      >
                        {plan.badge}
                      </Badge>
                    )}

                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem
                            value={plan.id}
                            id={plan.id}
                            className="sr-only"
                          />
                          <plan.icon
                            className={`h-5 w-5 ${
                              field.value === plan.id
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                          <CardTitle className="text-lg">
                            {plan.title}
                          </CardTitle>
                        </div>
                        {field.value === plan.id && (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pb-2">
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">{plan.price}</span>
                        <span className="ml-1 text-sm text-muted-foreground">
                          {plan.billingPeriod}
                        </span>
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-col items-start pt-4 border-t">
                      <ul className="space-y-2 w-full">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckIcon className="h-4 w-4 mt-0.5 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardFooter>
                  </Card>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

SubscriptionPlanForm.displayName = "SubscriptionPlanForm";

export default SubscriptionPlanForm;
