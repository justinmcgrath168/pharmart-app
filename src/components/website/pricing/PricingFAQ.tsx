/**
 * @file components/sections/pricing/PricingFAQ.tsx
 * @description FAQ section for the pricing page
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingFAQ() {
  const faqs = [
    {
      question: "Is there a setup fee?",
      answer:
        "No, there are no setup fees for any of our plans. You only pay the subscription fee. We also offer free setup assistance to help you get started quickly and efficiently.",
    },
    {
      question: "Can I change plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle. Your data will be preserved when switching between plans.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and selected digital payment methods including KHQR. For Enterprise plans, we also offer invoicing with net-30 payment terms.",
    },
    {
      question: "Do you offer custom plans?",
      answer:
        "Yes, for pharmacies with unique requirements or larger operations, we offer custom Enterprise plans. Please contact our sales team for custom pricing based on your specific needs and volume.",
    },
    {
      question: "Is there a contract or commitment period?",
      answer:
        "Our plans are available on a month-to-month basis with no long-term commitment required. Annual billing offers a 10% discount compared to monthly billing. You can cancel at any time.",
    },
    {
      question: "What happens after the free trial?",
      answer:
        "After your 14-day free trial ends, you'll be asked to select a plan and enter your payment information to continue using Pharmart. We'll send reminders before your trial expires, and you won't be charged automatically.",
    },
    {
      question: "Are there any additional costs?",
      answer:
        "The listed prices include all software features. Additional costs may apply for optional hardware (POS terminals, barcode scanners, etc.), custom development work, or premium integrations. These will always be clearly communicated upfront.",
    },
    {
      question:
        "Do you offer discounts for non-profits or educational institutions?",
      answer:
        "Yes, we offer special pricing for qualified non-profit organizations, educational institutions, and healthcare facilities in underserved areas. Please contact our sales team to learn more about our discount programs.",
    },
    {
      question: "What's included in the implementation process?",
      answer:
        "Implementation varies by plan. Starter includes self-guided setup with documentation. Professional includes guided setup with a dedicated implementation specialist. Enterprise includes full white-glove implementation with custom configuration, data migration, and staff training.",
    },
    {
      question: "How is billing handled for multi-location pharmacies?",
      answer:
        "For Professional plans, you pay a single subscription fee for up to 3 locations. For Enterprise plans with unlimited locations, pricing is customized based on the number of locations and total transaction volume. Contact our sales team for a quote.",
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600">
              Have questions about our pricing? Find answers to common questions
              below.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-zinc-600 mb-4">
              Still have questions? We&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 cursor-pointer">
                Contact Sales
              </div>
              <div className="inline-block rounded-lg bg-white border border-zinc-300 px-4 py-2 font-medium hover:bg-zinc-50 cursor-pointer">
                Schedule a Demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
