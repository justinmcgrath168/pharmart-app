/**
 * @file src/components/forms/signup/subscription-plan-form.tsx
 * Updated subscription plan form for the final step of signup process
 */
"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
  FormDescription,
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
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, InfoIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { SUBSCRIPTION_PLANS } from "@/lib/constants/signup";

const SubscriptionPlanForm = () => {
  const form = useFormContext<SignupData>();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">
          Select a subscription plan and complete your registration to start
          using Pharmart.
        </h3>
      </div>

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
                className="grid gap-6 md:grid-cols-2"
              >
                {SUBSCRIPTION_PLANS.map((plan) => (
                  <Card
                    key={plan.id}
                    className={`relative overflow-hidden cursor-pointer transition-all hover:border-primary ${
                      field.value === plan.id ? "border-2 border-primary" : ""
                    }`}
                    onClick={() => field.onChange(plan.id)}
                  >
                    {plan.recommended && (
                      <Badge
                        className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg"
                        variant="default"
                      >
                        Recommended
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

      <FormField
        control={form.control}
        name="acceptTerms"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Terms and Conditions</FormLabel>
              <FormDescription>
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-primary underline underline-offset-4"
                  target="_blank"
                >
                  terms of service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-primary underline underline-offset-4"
                  target="_blank"
                >
                  privacy policy
                </Link>
                .
              </FormDescription>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

SubscriptionPlanForm.displayName = "SubscriptionPlanForm";

export default SubscriptionPlanForm;
