import DemoRequestForm from "@/components/forms/DemoRequestForm";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import React from "react";

const DemoRequest = () => {
  return (
    <section className="py-12 md:py-24 bg-indigo-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              See Pharmart in Action
            </h2>
            <p className="text-lg text-zinc-700 mb-6">
              Schedule a personalized demo to see how Pharmart can transform
              your pharmacy operations. Our team will walk you through the
              platform and answer any questions you have.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "See the complete platform in action",
                "Get your specific questions answered",
                "Learn about implementation and training",
                "Discuss pricing and customization options",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-zinc-700 mb-6">
              Already convinced? Start your free 14-day trial today — no credit
              card required.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Start Free Trial
            </Button>
          </div>
          <div>
            <DemoRequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoRequest;
