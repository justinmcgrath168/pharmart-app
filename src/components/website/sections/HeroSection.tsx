/**
 * @file components/sections/HeroSection.tsx
 * @description Main hero section component for the Pharmart homepage
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Terminal, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block px-3 py-1 mb-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
              The Complete Pharmacy Management Solution
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Transform Your Pharmacy Business with{" "}
              <span className="text-indigo-600">Pharmart</span>
            </h1>
            <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
              All-in-one platform that combines eCommerce, POS, and management
              systems designed specifically for modern pharmacies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
            <div className="flex items-center pt-4 space-x-4 text-sm text-zinc-600">
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 text-indigo-500">✓</div>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 text-indigo-500">✓</div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-4 w-4 text-indigo-500">✓</div>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[600px] aspect-video overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/images/pharmart-dashboard-preview.png"
                alt="Pharmart Dashboard Preview"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGg..."
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent"></div>

              {/* Feature highlights floating over the image */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center">
                <ShoppingCart className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-sm font-medium">eCommerce</span>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center">
                <Terminal className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-sm font-medium">POS System</span>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg flex items-center">
                <BarChart3 className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-sm font-medium">Analytics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by section */}
        <div className="mt-16 border-t border-zinc-200 pt-8">
          <p className="text-center text-sm font-medium text-zinc-500 mb-6">
            TRUSTED BY PHARMACIES ACROSS THE COUNTRY
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 grayscale opacity-70">
            {/* These would be replaced with actual pharmacy brand logos */}
            {["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5"].map(
              (logo, i) => (
                <div key={i} className="h-8 w-auto flex items-center">
                  <div className="h-6 w-24 bg-zinc-200 rounded animate-pulse"></div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
