/**
 * @file components/sections/pricing/PricingTestimonials.tsx
 * @description Testimonials specifically focused on ROI and value
 */

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function PricingTestimonials() {
  const testimonials = [
    {
      quote:
        "Pharmart paid for itself within the first 3 months. Our prescription processing time decreased by 45%, and online sales have increased our revenue by over $5,000 per month.",
      author: "Dr. Sarah Johnson",
      role: "Owner, Johnson Family Pharmacy",
      image: "/images/testimonials/sarah-johnson.jpg",
      roi: "3-month ROI",
    },
    {
      quote:
        "The inventory management system alone saved us $42,000 in the first year by reducing waste and optimizing stock levels. The subscription fee is a small price to pay for that kind of return.",
      author: "Michael Chen",
      role: "Operations Director, MediCare Pharmacy Group",
      image: "/images/testimonials/michael-chen.jpg",
      roi: "10x ROI",
    },
    {
      quote:
        "We compared several options, and Pharmart offered the best value by far. Their all-in-one platform eliminated the need for multiple systems, saving us over $450 per month in subscription fees.",
      author: "Lisa Rodriguez",
      role: "Owner, Community Health Pharmacy",
      image: "/images/testimonials/lisa-rodriguez.jpg",
      roi: "30% cost reduction",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Real Value for Pharmacies
          </h2>
          <p className="text-zinc-600">
            Hear from pharmacy owners about the return on investment
            they&apos;ve experienced with Pharmart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-indigo-200 mb-4">
                  <Quote className="h-8 w-8 text-indigo-600" />
                </div>
                <p className="text-zinc-700 mb-6 flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-zinc-200 mr-4 overflow-hidden relative">
                      <div className="absolute inset-0 bg-zinc-300 animate-pulse"></div>
                      {/* This would be replaced with actual testimonial photos */}
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-zinc-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 text-green-700 text-sm font-medium py-1 px-3 rounded-full inline-block">
                    {testimonial.roi}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-zinc-600">
            Join hundreds of pharmacies that are getting real value from
            Pharmart.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <div className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 cursor-pointer">
              See More Success Stories
            </div>
            <div className="inline-block rounded-lg bg-white border border-zinc-300 px-4 py-2 font-medium hover:bg-zinc-50 cursor-pointer">
              Calculate Your ROI
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
