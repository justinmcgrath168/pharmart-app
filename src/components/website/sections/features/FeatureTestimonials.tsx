/**
 * @file components/sections/features/FeatureTestimonials.tsx
 * @description Testimonials section specific to the features page
 */

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function FeatureTestimonials() {
  const testimonials = [
    {
      quote:
        "The prescription management system in Pharmart has reduced our processing time by 45%. Our pharmacy technicians can now focus more on patient care instead of administrative tasks.",
      author: "Dr. Sarah Johnson",
      role: "Owner, Johnson Family Pharmacy",
      image: "/images/testimonials/sarah-johnson.jpg",
      feature: "Prescription Management",
    },
    {
      quote:
        "The multi-location inventory tracking allows us to see stock levels across all our stores in real-time. We've reduced overstock by 22% and stockouts have become almost non-existent.",
      author: "Michael Chen",
      role: "Operations Director, MediCare Pharmacy Group",
      image: "/images/testimonials/michael-chen.jpg",
      feature: "Inventory Management",
    },
    {
      quote:
        "Our online sales have increased by 230% since implementing Pharmart's eCommerce platform. The prescription refill feature has been particularly popular with our elderly customers.",
      author: "Lisa Rodriguez",
      role: "Owner, Community Health Pharmacy",
      image: "/images/testimonials/lisa-rodriguez.jpg",
      feature: "eCommerce Platform",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            What Our Customers Say About Our Features
          </h2>
          <p className="text-zinc-600">
            Hear from pharmacy owners who have transformed specific aspects of
            their operations with Pharmart.
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
                  <div className="bg-indigo-50 text-indigo-600 text-sm font-medium py-1 px-3 rounded-full inline-block">
                    {testimonial.feature}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-zinc-600 mb-6">
            Join hundreds of pharmacies that have transformed their businesses
            with Pharmart.
          </p>
          <div className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 cursor-pointer">
            Read Customer Success Stories
          </div>
        </div>
      </div>
    </section>
  );
}
