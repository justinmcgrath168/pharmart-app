/**
 * @file components/sections/features/FeaturesCallToAction.tsx
 * @description Call to action section for the features page
 */

import { Button } from "@/components/ui/button";

export default function FeaturesCallToAction() {
  return (
    <section className="py-12 md:py-24 bg-indigo-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Ready to Transform Your Pharmacy Operations?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join hundreds of pharmacies using Pharmart to streamline their
            operations, increase revenue, and provide better patient care.
          </p>
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
          <p className="mt-6 text-indigo-200 text-sm">
            No credit card required. 14-day free trial with full access to all
            features.
          </p>
        </div>
      </div>
    </section>
  );
}
