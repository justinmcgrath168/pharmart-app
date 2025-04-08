/**
 * @file components/sections/pricing/PricingCTA.tsx
 * @description Call to action section for the pricing page
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function PricingCTA() {
  return (
    <section className="py-12 md:py-24 bg-indigo-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Start Your 14-Day Free Trial Today
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Try Pharmart risk-free with full access to all features. No credit
            card required.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "Cancel anytime",
              "No credit card required",
              "Full feature access",
              "Free setup assistance",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-indigo-500 bg-opacity-50 px-4 py-2 rounded-full"
              >
                <CheckCircle2 className="h-4 w-4 mr-2 text-indigo-200" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-indigo-700"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="mt-8 text-indigo-200 text-sm">
            Questions? Contact our sales team at{" "}
            <span className="font-medium">sales@pharmart.com</span> or call{" "}
            <span className="font-medium">(800) 555-1234</span>
          </p>
        </div>
      </div>
    </section>
  );
}
