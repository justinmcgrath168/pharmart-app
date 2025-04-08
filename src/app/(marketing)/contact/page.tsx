/**
 * @file app/(marketing)/contact/page.tsx
 * @description Contact page with contact form and other communication channels
 */

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, {
    message: "Please select a subject.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  // Form submission handler
  async function onSubmit(data: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real implementation, you would send the data to your backend
    console.log(data);

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast("Message sent successfully", {
      description: "We'll get back to you as soon as possible.",
    });
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-16 bg-indigo-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Get in Touch with Pharmart
            </h1>
            <p className="text-lg text-zinc-700 md:text-xl">
              Have questions or want to learn more about our platform? Our team
              is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-zinc-500 mb-2">For general inquiries:</p>
              <Link
                href="mailto:info@pharmart.com"
                className="text-indigo-600 hover:underline"
              >
                info@pharmart.com
              </Link>
              <p className="text-zinc-500 mt-2 mb-2">For support:</p>
              <Link
                href="mailto:support@pharmart.com"
                className="text-indigo-600 hover:underline"
              >
                support@pharmart.com
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-zinc-500 mb-2">Sales:</p>
              <Link
                href="tel:+18005551234"
                className="text-indigo-600 hover:underline"
              >
                +1 (800) 555-1234
              </Link>
              <p className="text-zinc-500 mt-2 mb-2">Support:</p>
              <Link
                href="tel:+18005555678"
                className="text-indigo-600 hover:underline"
              >
                +1 (800) 555-5678
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-zinc-500 mb-2">Headquarters:</p>
              <address className="not-italic">
                <p>123 Tech Plaza, Suite 400</p>
                <p>San Francisco, CA 94105</p>
              </address>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-bold mb-2">Business Hours</h3>
              <p className="text-zinc-500 mb-2">Monday - Friday:</p>
              <p className="mb-2">9:00 AM - 6:00 PM (PST)</p>
              <p className="text-zinc-500 mb-2">Saturday - Sunday:</p>
              <p>Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-zinc-600 mb-6">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible. For immediate assistance, please call our support
                team.
              </p>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="font-medium mb-3">Looking for Support?</h3>
                <p className="text-zinc-600 mb-4">
                  Existing customers can also access our knowledge base and
                  support portal for faster assistance.
                </p>
                <Button variant="outline" className="w-full">
                  Visit Support Portal
                </Button>
              </div>
            </div>

            <div className="md:col-span-3">
              {isSubmitted ? (
                <div className="bg-white p-8 rounded-lg shadow-sm border border-zinc-200 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-zinc-600 mb-6">
                    Thank you for contacting us. We&apos;ve received your
                    message and will respond within 1-2 business days.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-sm border border-zinc-200">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name*</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email*</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="john@example.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="+1 (555) 123-4567"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company/Pharmacy (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Pharmacy" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject*</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="general">
                                  General Inquiry
                                </SelectItem>
                                <SelectItem value="demo">
                                  Request a Demo
                                </SelectItem>
                                <SelectItem value="pricing">
                                  Pricing Information
                                </SelectItem>
                                <SelectItem value="technical">
                                  Technical Question
                                </SelectItem>
                                <SelectItem value="partnership">
                                  Partnership Opportunity
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message*</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your message here..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="text-right">
                        <Button
                          type="submit"
                          className="bg-indigo-600 hover:bg-indigo-700"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-zinc-200">
            <div className="absolute inset-0 bg-zinc-100 animate-pulse"></div>
            {/* This would be replaced with an actual map */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-zinc-500">Map View</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-zinc-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">
                  How quickly will I receive a response to my inquiry?
                </h3>
                <p className="text-zinc-600">
                  We aim to respond to all inquiries within 1-2 business days.
                  For urgent matters, please call our support line directly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">
                  Can I schedule a demo of the Pharmart platform?
                </h3>
                <p className="text-zinc-600">
                  Absolutely! You can request a demo through our contact form or
                  by calling our sales team. We&apos;ll set up a personalized
                  demonstration of the platform tailored to your pharmacy&apos;s
                  needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">
                  Do you offer implementation support for new customers?
                </h3>
                <p className="text-zinc-600">
                  Yes, all new customers receive dedicated implementation
                  support to ensure a smooth transition to the Pharmart
                  platform. Our team will guide you through the setup process
                  and provide training for your staff.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">
                  Is Pharmart available internationally?
                </h3>
                <p className="text-zinc-600">
                  Currently, Pharmart is available in the United States and
                  Canada. We have plans to expand to other regions in the near
                  future. Please contact us for more information about
                  international availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
