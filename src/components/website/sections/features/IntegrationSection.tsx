/**
 * @file components/sections/features/IntegrationSection.tsx
 * @description Integration partners and ecosystem section
 */

import { Card, CardContent } from "@/components/ui/card";

export default function IntegrationSection() {
  const integrations = [
    {
      category: "Payment Processors",
      partners: [
        { name: "Stripe", logo: "/images/integrations/stripe.svg" },
        { name: "PayPal", logo: "/images/integrations/paypal.svg" },
        { name: "KHQR", logo: "/images/integrations/khqr.svg" },
        { name: "Square", logo: "/images/integrations/square.svg" },
      ],
    },
    {
      category: "Pharmacy Systems",
      partners: [
        { name: "RxSystem", logo: "/images/integrations/rxsystem.svg" },
        { name: "MedSync", logo: "/images/integrations/medsync.svg" },
        { name: "PharmaScript", logo: "/images/integrations/pharmascript.svg" },
        { name: "HealthLink", logo: "/images/integrations/healthlink.svg" },
      ],
    },
    {
      category: "Accounting & ERP",
      partners: [
        { name: "QuickBooks", logo: "/images/integrations/quickbooks.svg" },
        { name: "Xero", logo: "/images/integrations/xero.svg" },
        { name: "SAP", logo: "/images/integrations/sap.svg" },
        { name: "NetSuite", logo: "/images/integrations/netsuite.svg" },
      ],
    },
    {
      category: "Shipping & Logistics",
      partners: [
        { name: "ShipStation", logo: "/images/integrations/shipstation.svg" },
        { name: "DHL", logo: "/images/integrations/dhl.svg" },
        { name: "FedEx", logo: "/images/integrations/fedex.svg" },
        { name: "UPS", logo: "/images/integrations/ups.svg" },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Integration Ecosystem
          </h2>
          <p className="text-zinc-600">
            Pharmart seamlessly integrates with your existing systems and
            popular third-party services, providing a complete solution for your
            pharmacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {integrations.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="grid grid-cols-2 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="flex items-center">
                      <div className="w-12 h-12 bg-white rounded-lg border border-zinc-200 flex items-center justify-center mr-3">
                        <div className="w-8 h-8 bg-zinc-100 animate-pulse rounded"></div>
                        {/* This would be replaced with actual partner logos */}
                      </div>
                      <span className="font-medium">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-zinc-200 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Need a Custom Integration?
          </h3>
          <p className="text-zinc-600 mb-6">
            Our team can develop custom integrations with your existing systems
            or third-party services. Enterprise plans include API access for
            your development team.
          </p>
          <div className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 cursor-pointer">
            Contact Us About Integrations
          </div>
        </div>
      </div>
    </section>
  );
}
