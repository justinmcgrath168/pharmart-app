/**
 * @file components/sections/pricing/PricingComparison.tsx
 * @description Component for comparing Pharmart pricing with competitors
 */

import { CheckCircle2, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function PricingComparison() {
  const comparisonItems = [
    {
      feature: "All-in-one platform",
      description: "Combined eCommerce, POS, and management system",
      pharmart: true,
      competitors: false,
    },
    {
      feature: "Pharmacy-specific features",
      description: "Built specifically for pharmacy operations",
      pharmart: true,
      competitors: {
        label: "Limited",
        color: "yellow",
      },
    },
    {
      feature: "Subscription model",
      description: "Predictable monthly cost with no hidden fees",
      pharmart: true,
      competitors: true,
    },
    {
      feature: "Setup fees",
      description: "One-time fee to get started",
      pharmart: false,
      competitors: true,
    },
    {
      feature: "Transaction fees",
      description: "Additional fee per transaction",
      pharmart: false,
      competitors: true,
    },
    {
      feature: "Free trial period",
      description: "Try before you buy",
      pharmart: "14 days",
      competitors: "7 days",
    },
    {
      feature: "Implementation support",
      description: "Help getting set up and running",
      pharmart: "Included",
      competitors: "Paid add-on",
    },
    {
      feature: "Ongoing support",
      description: "Help when you need it",
      pharmart: "All plans",
      competitors: "Premium plans only",
    },
    {
      feature: "Regular updates",
      description: "New features and improvements",
      pharmart: "Monthly",
      competitors: "Quarterly",
    },
    {
      feature: "Contract required",
      description: "Long-term commitment",
      pharmart: false,
      competitors: true,
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="mb-4 bg-indigo-600">Comparison</Badge>
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            How We Compare to Alternatives
          </h2>
          <p className="text-zinc-600">
            See how Pharmart stacks up against traditional pharmacy software
            solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <Table>
            <TableCaption>
              Based on average pricing and features of leading pharmacy
              management systems.
            </TableCaption>
            <TableHeader className="bg-white">
              <TableRow>
                <TableHead className="w-[300px]">Feature</TableHead>
                <TableHead className="text-center bg-indigo-50 w-[200px]">
                  <div className="font-bold text-indigo-600">Pharmart</div>
                </TableHead>
                <TableHead className="text-center w-[200px]">
                  <div className="font-bold">Traditional Solutions</div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonItems.map((item, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                >
                  <TableCell className="font-medium">
                    <div>{item.feature}</div>
                    <div className="text-xs text-zinc-500">
                      {item.description}
                    </div>
                  </TableCell>
                  <TableCell className="text-center bg-indigo-50">
                    {typeof item.pharmart === "boolean" ? (
                      item.pharmart ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span className="font-medium text-indigo-600">
                        {item.pharmart}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {typeof item.competitors === "boolean" ? (
                      item.competitors ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : typeof item.competitors === "string" ? (
                      <span>{item.competitors}</span>
                    ) : item.competitors &&
                      typeof item.competitors === "object" ? (
                      <Badge
                        variant="outline"
                        className={`bg-${item.competitors.color}-100 text-${item.competitors.color}-700`}
                      >
                        {item.competitors.label}
                      </Badge>
                    ) : null}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="max-w-2xl mx-auto mt-12 bg-white p-6 rounded-lg shadow border border-zinc-200">
          <h3 className="text-xl font-bold mb-4">Why Pharmart is Different</h3>
          <p className="text-zinc-600 mb-6">
            Unlike traditional pharmacy software that requires multiple systems,
            expensive setup fees, and long-term contracts, Pharmart provides an
            all-in-one solution with transparent pricing and no hidden costs.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
              <div>
                <p className="font-medium">No long-term contracts</p>
                <p className="text-sm text-zinc-500">
                  Pay month-to-month with no commitments
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
              <div>
                <p className="font-medium">No setup or hidden fees</p>
                <p className="text-sm text-zinc-500">
                  Just the transparent monthly subscription
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
              <div>
                <p className="font-medium">Free implementation support</p>
                <p className="text-sm text-zinc-500">
                  We help you get up and running quickly
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
              <div>
                <p className="font-medium">Continuous improvements</p>
                <p className="text-sm text-zinc-500">
                  Regular updates with new features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
