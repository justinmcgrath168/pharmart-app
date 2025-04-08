/**
 * @file components/layout/Footer.tsx
 * @description Site-wide footer with sitemap and legal information
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-200">
      {/* Newsletter Section */}
      <div className="border-b border-zinc-800">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="max-w-md">
              <h3 className="text-xl font-bold mb-2">
                Stay updated on pharmacy tech
              </h3>
              <p className="text-zinc-400">
                Subscribe to our newsletter for the latest features, tips, and
                industry insights.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-zinc-800 border-zinc-700 text-white min-w-[250px]"
              />
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="font-bold text-xl">Pharmart</span>
            </Link>
            <p className="text-zinc-400 mb-6 max-w-md">
              The complete pharmacy management solution that combines eCommerce,
              POS, and management systems in one seamless platform.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/features/ecommerce"
                  className="text-zinc-400 hover:text-white"
                >
                  eCommerce System
                </Link>
              </li>
              <li>
                <Link
                  href="/features/pos"
                  className="text-zinc-400 hover:text-white"
                >
                  POS System
                </Link>
              </li>
              <li>
                <Link
                  href="/features/management"
                  className="text-zinc-400 hover:text-white"
                >
                  Management System
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-zinc-400 hover:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className="text-zinc-400 hover:text-white"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resources/blog"
                  className="text-zinc-400 hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/case-studies"
                  className="text-zinc-400 hover:text-white"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/help-center"
                  className="text-zinc-400 hover:text-white"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/webinars"
                  className="text-zinc-400 hover:text-white"
                >
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/api-docs"
                  className="text-zinc-400 hover:text-white"
                >
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about/team"
                  className="text-zinc-400 hover:text-white"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-zinc-400 hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-zinc-400 hover:text-white">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} Pharmart. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/terms" className="text-zinc-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-zinc-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-zinc-400 hover:text-white">
                Cookie Policy
              </Link>
              <Link
                href="/accessibility"
                className="text-zinc-400 hover:text-white"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
