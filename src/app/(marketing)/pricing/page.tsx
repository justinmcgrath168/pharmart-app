/**
 * @file app/(marketing)/pricing/page.tsx
 * @description Main pricing page component
 */

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import PricingTables from "@/components/website/pricing/PricingTables";
import PricingCalculator from "@/components/website/pricing/PricingCalculator";
import PricingComparison from "@/components/website/pricing/PricingComparision";
import PricingTestimonials from "@/components/website/pricing/PricingTestimonials";
import PricingFAQ from "@/components/website/pricing/PricingFAQ";
import PricingCTA from "@/components/website/pricing/PricingCTA";

export default function PricingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Transparent Pricing for Every Pharmacy
            </h1>
            <p className="text-xl text-zinc-600 mb-10">
              Choose the plan that fits your business needs. All plans include
              core features with no hidden fees.
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-10">
              <Label
                htmlFor="pricing-toggle"
                className="text-lg font-medium cursor-pointer"
              >
                Monthly
              </Label>
              <div className="relative">
                <Switch id="pricing-toggle" />
                <Badge className="absolute -top-2 -right-16 bg-green-600">
                  Save 10%
                </Badge>
              </div>
              <Label
                htmlFor="pricing-toggle"
                className="text-lg font-medium text-zinc-500 cursor-pointer"
              >
                Annual
              </Label>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                "All Features Included",
                "14-Day Free Trial",
                "No Credit Card Required",
                "Free Setup Assistance",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm text-sm font-medium"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <PricingTables />

      {/* Pricing Calculator */}
      <PricingCalculator />

      {/* Comparison Section */}
      <PricingComparison />

      {/* Testimonials */}
      <PricingTestimonials />

      {/* FAQ Section */}
      <PricingFAQ />

      {/* Enterprise Section */}
      <section className="py-12 md:py-24 bg-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-indigo-600">Enterprise</Badge>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-zinc-600 mb-6">
                  We offer tailored solutions for pharmacy chains, hospital
                  pharmacies, and specialized pharmacies with unique
                  requirements.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Custom integrations with your existing systems",
                    "Dedicated account manager and priority support",
                    "Volume discounts for multi-location businesses",
                    "Customized training and implementation",
                    "Advanced security and compliance features",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 text-indigo-600">✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Contact Sales Team
                </Button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Our Enterprise Clients
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-16 bg-zinc-100 rounded flex items-center justify-center"
                    >
                      <div className="w-20 h-8 bg-zinc-200 animate-pulse rounded"></div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-zinc-200 mt-6 pt-6">
                  <p className="text-zinc-600 mb-4">
                    &quot;The Pharmart team worked closely with us to create a
                    custom solution that perfectly fits our multi-state pharmacy
                    chain&apos;s needs.&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Jennifer Smith</p>
                      <p className="text-sm text-zinc-500">
                        CTO, National Pharmacy Group
                      </p>
                    </div>
                  </div>
                </div>
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
