/**
 * @file app/(marketing)/features/page.tsx
 * @description Main features page that showcases all three main products
 */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComparisonTable from "@/components/website/sections/features/ComparisonTable";
import EcommerceFeatures from "@/components/website/sections/features/EcommerceFeatures";
import FeatureHero from "@/components/website/sections/features/FeatureHero";
import FeaturesCallToAction from "@/components/website/sections/features/FeaturesCallToAction";
import FeatureTestimonials from "@/components/website/sections/features/FeatureTestimonials";
import IntegrationSection from "@/components/website/sections/features/IntegrationSection";
import ManagementFeatures from "@/components/website/sections/features/ManagementFeatures";
import POSFeatures from "@/components/website/sections/features/POSFeatures";

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero Section */}
      <FeatureHero />

      {/* Features Tabs */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="ecommerce" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 w-full max-w-xl">
                <TabsTrigger value="ecommerce">eCommerce</TabsTrigger>
                <TabsTrigger value="pos">POS System</TabsTrigger>
                <TabsTrigger value="management">Management</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ecommerce">
              <EcommerceFeatures />
            </TabsContent>

            <TabsContent value="pos">
              <POSFeatures />
            </TabsContent>

            <TabsContent value="management">
              <ManagementFeatures />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Comparison Table */}
      <ComparisonTable />

      {/* Testimonials Section */}
      <FeatureTestimonials />

      {/* Integration Section */}
      <IntegrationSection />

      {/* Call to Action */}
      <FeaturesCallToAction />
    </main>
  );
}
