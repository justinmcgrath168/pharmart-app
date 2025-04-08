import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Pharmart has completely transformed our pharmacy operations. We've seen a 30% increase in efficiency and our patients love the online ordering system.",
      author: "Dr. Sarah Johnson",
      role: "Owner, Johnson Family Pharmacy",
      image: "/images/testimonials/sarah-johnson.jpg",
    },
    {
      quote:
        "The inventory management system alone has saved us thousands of dollars by reducing waste and optimizing our stock levels. Implementation was smooth and the support team is excellent.",
      author: "Michael Chen",
      role: "COO, MediCare Pharmacy Group",
      image: "/images/testimonials/michael-chen.jpg",
    },
    {
      quote:
        "As a small independent pharmacy, we were hesitant to adopt new technology. Pharmart made the transition easy, and now we can compete with the big chains through our online store.",
      author: "Lisa Rodriguez",
      role: "Owner, Community Health Pharmacy",
      image: "/images/testimonials/lisa-rodriguez.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-zinc-500">
            Hear from pharmacy owners who have transformed their businesses with
            Pharmart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl text-indigo-200 mb-4">&quot;</div>
                <p className="text-zinc-700 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-200 mr-4 overflow-hidden relative">
                    <div className="absolute inset-0 bg-zinc-300 animate-pulse"></div>
                    {/* This would be replaced with actual testimonial photos */}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="link" className="text-indigo-600">
            View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
