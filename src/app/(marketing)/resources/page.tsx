/**
 * @file app/(marketing)/resources/page.tsx
 * @description Resources page with blog posts, case studies, webinars, and documentation
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Users,
  FileText,
  Video,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ResourcesPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Optimize Your Pharmacy's Inventory Management",
      excerpt:
        "Learn strategies to reduce costs and improve efficiency with better inventory control...",
      date: "April 2, 2025",
      readTime: "8 min read",
      category: "Operations",
      author: "Sarah Chen",
      authorRole: "CEO & Co-Founder",
      image: "/images/blog/inventory-management.jpg",
    },
    {
      id: 2,
      title: "The Future of Pharmacy: Trends to Watch in 2025",
      excerpt:
        "Explore emerging technologies and business models shaping the pharmacy industry...",
      date: "March 25, 2025",
      readTime: "12 min read",
      category: "Industry",
      author: "Dr. Priya Patel",
      authorRole: "Chief Pharmacy Officer",
      image: "/images/blog/pharmacy-trends.jpg",
    },
    {
      id: 3,
      title: "Improving Patient Experience with Digital Tools",
      excerpt:
        "Discover how digital tools can enhance customer satisfaction and loyalty...",
      date: "March 18, 2025",
      readTime: "6 min read",
      category: "Customer Experience",
      author: "Michael Robinson",
      authorRole: "CTO & Co-Founder",
      image: "/images/blog/patient-experience.jpg",
    },
    {
      id: 4,
      title: "Compliance Guide: Key Regulations for Pharmacy Operations",
      excerpt:
        "Stay up-to-date with the latest regulatory requirements affecting pharmacies...",
      date: "March 10, 2025",
      readTime: "10 min read",
      category: "Compliance",
      author: "Jennifer Williams",
      authorRole: "Compliance Specialist",
      image: "/images/blog/compliance.jpg",
    },
  ];

  // Sample case studies data
  const caseStudies = [
    {
      id: 1,
      title: "How MediCare Pharmacy Increased Revenue by 32%",
      excerpt:
        "A regional pharmacy chain transformed their business with Pharmart's complete platform...",
      image: "/images/case-studies/medicare-pharmacy.jpg",
      results: [
        "32% revenue increase",
        "45% reduction in admin time",
        "95% customer satisfaction",
      ],
    },
    {
      id: 2,
      title: "Family Health Pharmacy's Digital Transformation",
      excerpt:
        "An independent pharmacy expanded their reach with an online presence...",
      image: "/images/case-studies/family-health.jpg",
      results: [
        "2,500+ online customers",
        "28% growth in prescription volume",
        "3x ROI in first year",
      ],
    },
    {
      id: 3,
      title: "LifeWell Pharmacy's Inventory Optimization Journey",
      excerpt:
        "How data-driven inventory management reduced costs while improving availability...",
      image: "/images/case-studies/lifewell.jpg",
      results: [
        "22% reduction in inventory costs",
        "99.5% in-stock rate",
        "67% faster ordering process",
      ],
    },
  ];

  // Sample webinars data
  const webinars = [
    {
      id: 1,
      title: "Mastering Pharmacy Analytics with Pharmart",
      date: "April 15, 2025",
      time: "11:00 AM PST",
      host: "David Kim, Head of Product",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Streamlining Prescription Management Workflows",
      date: "March 30, 2025",
      time: "1:00 PM PST",
      host: "Dr. Priya Patel, Chief Pharmacy Officer",
      status: "recorded",
    },
    {
      id: 3,
      title: "Maximizing Profitability in Your Pharmacy Business",
      date: "March 12, 2025",
      time: "10:00 AM PST",
      host: "Sarah Chen, CEO",
      status: "recorded",
    },
  ];

  // Sample documentation categories
  const documentationCategories = [
    {
      title: "Getting Started",
      icon: <FileText className="h-5 w-5" />,
      description:
        "Set up your Pharmart account and configure your pharmacy profile.",
      link: "/resources/docs/getting-started",
    },
    {
      title: "eCommerce Platform",
      icon: <Users className="h-5 w-5" />,
      description:
        "Learn how to manage your online pharmacy store and fulfill orders.",
      link: "/resources/docs/ecommerce",
    },
    {
      title: "POS System",
      icon: <FileText className="h-5 w-5" />,
      description:
        "Guides for operating the point-of-sale system and processing transactions.",
      link: "/resources/docs/pos",
    },
    {
      title: "Inventory Management",
      icon: <FileText className="h-5 w-5" />,
      description:
        "Best practices for managing your pharmacy inventory efficiently.",
      link: "/resources/docs/inventory",
    },
    {
      title: "Reporting & Analytics",
      icon: <FileText className="h-5 w-5" />,
      description:
        "Instructions for generating reports and analyzing your pharmacy data.",
      link: "/resources/docs/analytics",
    },
    {
      title: "API Documentation",
      icon: <FileText className="h-5 w-5" />,
      description:
        "Technical documentation for developers integrating with Pharmart.",
      link: "/resources/docs/api",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-indigo-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Resources & Knowledge Center
            </h1>
            <p className="text-lg text-zinc-700 md:text-xl">
              Explore our articles, case studies, webinars, and documentation to
              get the most out of Pharmart.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs defaultValue="blog" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-4 w-full max-w-xl">
                <TabsTrigger value="blog">Blog</TabsTrigger>
                <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
                <TabsTrigger value="webinars">Webinars</TabsTrigger>
                <TabsTrigger value="documentation">Documentation</TabsTrigger>
              </TabsList>
            </div>

            {/* Blog Posts Tab */}
            <TabsContent value="blog" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden border-0 shadow-lg"
                  >
                    <div className="relative aspect-video bg-zinc-100">
                      <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
                      {/* This would be replaced with actual blog post images */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-zinc-500">Blog Image</p>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center mb-2">
                        <Badge variant="secondary" className="mr-2">
                          {post.category}
                        </Badge>
                        <div className="text-sm text-zinc-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl hover:text-indigo-600 transition-colors">
                        <Link href={`/resources/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-zinc-600 mt-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 mr-2 flex items-center justify-center text-indigo-600 font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{post.author}</p>
                          <p className="text-xs text-zinc-500">{post.date}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-indigo-600"
                      >
                        Read Article <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline">View All Blog Posts</Button>
              </div>
            </TabsContent>

            {/* Case Studies Tab */}
            <TabsContent value="case-studies" className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                {caseStudies.map((study) => (
                  <Card
                    key={study.id}
                    className="overflow-hidden border-0 shadow-lg"
                  >
                    <div className="relative aspect-video bg-zinc-100">
                      <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
                      {/* This would be replaced with actual case study images */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-zinc-500">Case Study Image</p>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl hover:text-indigo-600 transition-colors">
                        <Link href={`/resources/case-studies/${study.id}`}>
                          {study.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-zinc-600 mt-2">
                        {study.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-sm font-semibold mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="text-sm flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-indigo-600"
                      >
                        Read Case Study{" "}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline">View All Case Studies</Button>
              </div>
            </TabsContent>

            {/* Webinars Tab */}
            <TabsContent value="webinars" className="w-full">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Upcoming Webinars</h2>
                <Card className="border-0 shadow-lg">
                  {webinars
                    .filter((w) => w.status === "upcoming")
                    .map((webinar) => (
                      <div
                        key={webinar.id}
                        className="grid md:grid-cols-3 gap-6 p-6 border-b last:border-b-0"
                      >
                        <div className="md:col-span-2">
                          <Badge className="mb-2 bg-green-100 text-green-700 hover:bg-green-100">
                            Upcoming
                          </Badge>
                          <h3 className="text-xl font-bold mb-2">
                            {webinar.title}
                          </h3>
                          <p className="text-zinc-600 mb-4">
                            Hosted by {webinar.host}
                          </p>
                          <div className="flex items-center text-sm text-zinc-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {webinar.date} at {webinar.time}
                          </div>
                        </div>
                        <div className="flex items-center justify-start md:justify-end">
                          <Button className="bg-indigo-600 hover:bg-indigo-700">
                            Register Now
                          </Button>
                        </div>
                      </div>
                    ))}
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Recorded Webinars</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {webinars
                    .filter((w) => w.status === "recorded")
                    .map((webinar) => (
                      <Card
                        key={webinar.id}
                        className="border-0 shadow-lg overflow-hidden"
                      >
                        <div className="relative aspect-video bg-zinc-100">
                          <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
                          {/* This would be replaced with actual webinar thumbnails */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Video className="h-12 w-12 text-zinc-400" />
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold mb-2">
                            {webinar.title}
                          </h3>
                          <p className="text-zinc-600 mb-4">
                            Hosted by {webinar.host}
                          </p>
                          <div className="flex items-center text-sm text-zinc-500 mb-4">
                            <Clock className="h-4 w-4 mr-1" />
                            Recorded on {webinar.date}
                          </div>
                          <Button className="w-full">Watch Recording</Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
                <div className="text-center">
                  <Button variant="outline">View All Webinars</Button>
                </div>
              </div>
            </TabsContent>

            {/* Documentation Tab */}
            <TabsContent value="documentation" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {documentationCategories.map((category, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Link href={category.link} className="block p-6">
                      <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        {category.title}
                      </h3>
                      <p className="text-zinc-600">{category.description}</p>
                    </Link>
                  </Card>
                ))}
              </div>

              <div className="bg-indigo-50 rounded-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">
                      Need Technical Support?
                    </h3>
                    <p className="text-zinc-600 mb-4">
                      Our support team is available to help you with any
                      technical issues or questions about the Pharmart platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        Contact Support
                      </Button>
                      <Button variant="outline">Visit Help Center</Button>
                    </div>
                  </div>
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-indigo-600" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-indigo-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated on Pharmacy Trends
            </h2>
            <p className="text-indigo-100 mb-8">
              Join our newsletter for the latest industry insights, feature
              updates, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white text-zinc-900"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
            <p className="text-xs text-indigo-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
