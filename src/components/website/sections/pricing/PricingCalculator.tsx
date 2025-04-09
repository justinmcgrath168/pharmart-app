/**
 * @file components/sections/pricing/PricingCalculator.tsx
 * @description Interactive ROI calculator for the pricing page
 */

"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, ArrowRight } from "lucide-react";

export default function PricingCalculator() {
  // Default values
  const [pharmacySize, setPharmacySize] = useState("small");
  const [prescriptionsPerDay, setPrescriptionsPerDay] = useState(50);
  const [currentSoftwareCost, setCurrentSoftwareCost] = useState(400);
  const [staffHourlyRate, setStaffHourlyRate] = useState(25);

  // Pre-calculated ROI values
  const calculatedValues = {
    small: {
      monthlySaving: 320,
      timePerRx: 2.1, // minutes
      timeSaved: 45, // %
      inventorySaving: 1200, // monthly
      onlineSales: 2500, // monthly increase
    },
    medium: {
      monthlySaving: 650,
      timePerRx: 1.8,
      timeSaved: 50,
      inventorySaving: 2800,
      onlineSales: 6000,
    },
    large: {
      monthlySaving: 1200,
      timePerRx: 1.5,
      timeSaved: 55,
      inventorySaving: 4800,
      onlineSales: 12000,
    },
  };

  // Calculate pharmacy-specific ROI
  const calculateROI = () => {
    const values = calculatedValues[pharmacySize];

    // Calculate time savings
    const dailyRxTimeBeforeMinutes = prescriptionsPerDay * 4; // Assuming 4 minutes per Rx before
    const dailyRxTimeAfterMinutes = prescriptionsPerDay * values.timePerRx;
    const dailyTimeSavedMinutes =
      dailyRxTimeBeforeMinutes - dailyRxTimeAfterMinutes;
    const monthlyTimeSavedHours = (dailyTimeSavedMinutes * 30) / 60;
    const monthlyTimeSavingValue = monthlyTimeSavedHours * staffHourlyRate;

    // Calculate software cost savings
    const softwareSavings =
      currentSoftwareCost -
      (pharmacySize === "small" ? 25 : pharmacySize === "medium" ? 50 : 200);

    // Total monthly benefit
    const totalMonthlySavings =
      monthlyTimeSavingValue + values.inventorySaving + softwareSavings;
    const totalMonthlyBenefit = totalMonthlySavings + values.onlineSales;

    // ROI calculation
    const monthlyInvestment =
      pharmacySize === "small" ? 25 : pharmacySize === "medium" ? 50 : 200;
    const annualROI =
      ((totalMonthlyBenefit * 12) / (monthlyInvestment * 12)) * 100;

    return {
      timeSavingValue: Math.round(monthlyTimeSavingValue),
      softwareSavings: Math.max(0, softwareSavings),
      inventorySavings: values.inventorySaving,
      onlineSalesIncrease: values.onlineSales,
      totalMonthlyBenefit: Math.round(totalMonthlyBenefit),
      roi: Math.round(annualROI),
    };
  };

  const results = calculateROI();

  return (
    <section className="py-12 md:py-24" id="calculator">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            <Calculator className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-zinc-600">
            See how much your pharmacy could save with Pharmart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Pharmacy Details</CardTitle>
              <CardDescription>
                Adjust the values to match your pharmacy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="pharmacy-size">Pharmacy Size</Label>
                <Select
                  value={pharmacySize}
                  onValueChange={(value) =>
                    setPharmacySize(value as "small" | "medium" | "large")
                  }
                >
                  <SelectTrigger id="pharmacy-size">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">
                      Small (Single Location)
                    </SelectItem>
                    <SelectItem value="medium">
                      Medium (2-3 Locations)
                    </SelectItem>
                    <SelectItem value="large">Large (4+ Locations)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="prescriptions">Daily Prescriptions</Label>
                  <span className="text-sm text-zinc-500">
                    {prescriptionsPerDay}
                  </span>
                </div>
                <Slider
                  id="prescriptions"
                  min={10}
                  max={500}
                  step={10}
                  value={[prescriptionsPerDay]}
                  onValueChange={(value) => setPrescriptionsPerDay(value[0])}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="current-cost">
                  Current Monthly Software Cost ($)
                </Label>
                <Input
                  id="current-cost"
                  type="number"
                  value={currentSoftwareCost}
                  onChange={(e) =>
                    setCurrentSoftwareCost(parseInt(e.target.value) || 0)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hourly-rate">Staff Hourly Rate ($)</Label>
                <Input
                  id="hourly-rate"
                  type="number"
                  value={staffHourlyRate}
                  onChange={(e) =>
                    setStaffHourlyRate(parseInt(e.target.value) || 0)
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-indigo-50 border-indigo-100">
            <CardHeader>
              <CardTitle>Your Estimated ROI</CardTitle>
              <CardDescription>
                Based on data from similar pharmacies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  {results.roi}%
                </div>
                <div className="text-zinc-600">Annual Return on Investment</div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-sm">Staff time savings</div>
                  <div className="font-medium">
                    ${results.timeSavingValue}/month
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm">Software cost savings</div>
                  <div className="font-medium">
                    ${results.softwareSavings}/month
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm">Inventory optimization</div>
                  <div className="font-medium">
                    ${results.inventorySavings}/month
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm">Online sales increase</div>
                  <div className="font-medium">
                    ${results.onlineSalesIncrease}/month
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">Total monthly benefit</div>
                    <div className="text-xl font-bold text-indigo-600">
                      ${results.totalMonthlyBenefit}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Get Detailed ROI Analysis{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
