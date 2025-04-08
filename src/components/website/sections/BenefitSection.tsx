import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, ShieldCheck, UserPlus, Zap } from "lucide-react";
import React from "react";

const BenefitSection = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-indigo-600" />,
      title: "HIPAA Compliant",
      description:
        "Our platform is fully HIPAA compliant, ensuring your patient data is secure and protected at all times.",
    },
    {
      icon: <Zap className="h-10 w-10 text-indigo-600" />,
      title: "Increased Efficiency",
      description:
        "Automate repetitive tasks and streamline workflows to save time and reduce operational costs.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-indigo-600" />,
      title: "Data-Driven Insights",
      description:
        "Gain valuable insights into your pharmacy's performance with comprehensive analytics and reporting.",
    },
    {
      icon: <UserPlus className="h-10 w-10 text-indigo-600" />,
      title: "Improved Patient Experience",
      description:
        "Provide a better experience for your patients with online ordering, refill reminders, and more.",
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Why Pharmacies Choose Pharmart
          </h2>
          <p className="text-lg text-zinc-500">
            Join hundreds of pharmacies that are transforming their businesses
            with our comprehensive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-zinc-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
