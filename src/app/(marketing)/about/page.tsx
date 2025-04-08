/**
 * @file app/(marketing)/about/page.tsx
 * @description About page component showcasing company story and team
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "/images/team/sarah-chen.jpg",
      bio: "Former pharmacist with 10+ years of experience in healthcare technology.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Robinson",
      role: "CTO & Co-Founder",
      image: "/images/team/michael-robinson.jpg",
      bio: "Software architect with expertise in building SaaS platforms for healthcare.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. Priya Patel",
      role: "Chief Pharmacy Officer",
      image: "/images/team/priya-patel.jpg",
      bio: "Clinical pharmacist with a focus on improving pharmacy workflows.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Kim",
      role: "Head of Product",
      image: "/images/team/david-kim.jpg",
      bio: "Product leader with a track record of building successful healthcare platforms.",
      linkedin: "#",
      twitter: "#",
    },
  ];

  const partners = [
    "Medicare Associates",
    "Global Health Systems",
    "PharmaTech Solutions",
    "HealthVenture Capital",
    "MedSupply Network",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:py-32 bg-indigo-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Our Mission is to Transform Pharmacy Management
            </h1>
            <p className="text-lg text-zinc-700 mb-8 md:text-xl">
              We&apos;re building the technology that empowers pharmacists to
              spend less time on administration and more time caring for
              patients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-zinc-700">
                <p>
                  Pharmart was founded in 2022 by Sarah Chen and Michael
                  Robinson, who experienced firsthand the challenges of managing
                  a modern pharmacy with outdated technology.
                </p>
                <p>
                  After spending years working in a busy pharmacy, Sarah
                  realized that pharmacists were spending too much time on
                  administrative tasks and not enough time with patients. She
                  teamed up with Michael, a software architect, to build a
                  solution that would streamline pharmacy operations.
                </p>
                <p>
                  What started as a simple inventory management tool has grown
                  into a comprehensive platform that serves pharmacies across
                  the country. Our team now includes pharmacists, developers,
                  and business experts all working toward a common goal: to
                  simplify pharmacy management.
                </p>
                <p>
                  Today, Pharmart is used by hundreds of pharmacies ranging from
                  independent stores to regional chains, helping them save time,
                  reduce errors, and grow their businesses.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Read Our Case Studies
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
              {/* This would be replaced with an actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-zinc-500">Company Timeline Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Our Values
            </h2>
            <p className="text-zinc-700">
              The principles that guide everything we do at Pharmart.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Patient First</h3>
                <p className="text-zinc-600">
                  We build technology that ultimately improves patient care and
                  health outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Simplify Complexity</h3>
                <p className="text-zinc-600">
                  We turn complex pharmacy operations into intuitive,
                  streamlined workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Continuous Improvement
                </h3>
                <p className="text-zinc-600">
                  We constantly iterate on our platform based on user feedback
                  and industry changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Empower Pharmacists</h3>
                <p className="text-zinc-600">
                  We give pharmacists the tools they need to run successful,
                  patient-centered businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-24 bg-zinc-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-zinc-700">
              Experts in pharmacy, technology, and business working together to
              transform the industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg">
                <div className="relative aspect-square bg-zinc-100">
                  <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
                  {/* This would be replaced with actual team member photos */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-zinc-500">{member.name}&apos;s Photo</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-indigo-600 mb-2">{member.role}</p>
                  <p className="text-zinc-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">View Full Team</Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              Our Partners & Investors
            </h2>
            <p className="text-zinc-700">
              Working with industry leaders to bring the best solutions to
              pharmacies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="h-24 rounded-lg border border-zinc-200 bg-white flex items-center justify-center p-6"
              >
                <div className="h-6 w-32 bg-zinc-100 animate-pulse rounded"></div>
                {/* This would be replaced with actual partner logos */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-indigo-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
              Join Us in Transforming Pharmacy Management
            </h2>
            <p className="text-indigo-100 mb-8">
              Experience the difference with Pharmart&apos;s all-in-one
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-indigo-700"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
