/**
 * @file components/sections/features/FeatureHero.tsx
 * @description Hero section for the features page
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function FeatureHero() {
  const keyFeatures = [
    "All-in-one pharmacy management platform",
    "Seamless integration between eCommerce, POS, and management",
    "Designed specifically for pharmacy workflows",
    "HIPAA compliant and secure",
  ];

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Powerful Features for Modern Pharmacies
          </h1>
          <p className="text-xl text-zinc-600 mb-8 md:text-2xl">
            Pharmart combines three essential systems into one seamless
            platform, designed specifically for pharmacy operations.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700" size="lg">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
