/**
 * @file app/(marketing)/page.tsx
 * @description Homepage component for the Pharmart business website
 */

import HeroSection from "@/components/website/sections/HeroSection";
import FeaturesOverview from "@/components/website/sections/FeaturesOverview";
import BenefitSection from "@/components/website/sections/BenefitSection";
import StatisticsSection from "@/components/website/sections/StatisticsSection";
import Testimonials from "@/components/website/sections/Testimonials";
import PricingSection from "@/components/website/sections/PricingSection";
import DemoRequest from "@/components/website/sections/DemoRequest";
import BlogPreviewSection from "@/components/website/sections/BlogPreviewSection";
import CTASection from "@/components/website/sections/CTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BenefitSection />
      <FeaturesOverview />
      <StatisticsSection />
      <Testimonials />
      <PricingSection />
      <DemoRequest />
      <BlogPreviewSection />
      <CTASection />
    </main>
  );
}
