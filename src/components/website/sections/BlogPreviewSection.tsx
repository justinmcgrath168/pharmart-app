import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "lucide-react";
import React from "react";

const BlogPreviewSection = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-zinc-500">
              Industry insights and tips for pharmacy owners.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="outline">View All Articles</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "5 Ways to Optimize Your Pharmacy's Inventory Management",
              excerpt:
                "Learn strategies to reduce costs and improve efficiency with better inventory control...",
              date: "April 2, 2025",
            },
            {
              title: "The Future of Pharmacy: Trends to Watch in 2025",
              excerpt:
                "Explore emerging technologies and business models shaping the pharmacy industry...",
              date: "March 25, 2025",
            },
            {
              title: "Improving Patient Experience with Digital Tools",
              excerpt:
                "Discover how digital tools can enhance customer satisfaction and loyalty...",
              date: "March 18, 2025",
            },
          ].map((post, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="relative aspect-video bg-zinc-100">
                <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
                {/* This would be replaced with actual blog post images */}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 hover:text-indigo-600 transition-colors">
                  <Link href="/resources/blog/1">{post.title}</Link>
                </h3>
                <p className="text-zinc-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-zinc-500">{post.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
