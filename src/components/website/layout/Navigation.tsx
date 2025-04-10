/**
 * @file components/layout/Navigation.tsx
 * @description Enhanced main navigation component with dropdowns and improved mobile menu
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
  Terminal,
  BarChart3,
  Info,
  HelpCircle,
  FileText,
  Phone,
  DollarSign,
} from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    {
      name: "Features",
      path: "/features",
      hasDropdown: true,
      dropdown: [
        {
          name: "Overview",
          path: "/features",
          description: "Explore all platform features",
          icon: <BarChart3 className="h-4 w-4" />,
        },
        {
          name: "eCommerce System",
          path: "/features/ecommerce",
          description: "Online pharmacy storefront",
          icon: <ShoppingCart className="h-4 w-4" />,
        },
        {
          name: "POS System",
          path: "/features/pos",
          description: "Point of sale for pharmacies",
          icon: <Terminal className="h-4 w-4" />,
        },
        {
          name: "Management System",
          path: "/features/management",
          description: "Complete pharmacy management",
          icon: <BarChart3 className="h-4 w-4" />,
        },
      ],
    },
    {
      name: "Pricing",
      path: "/pricing",
      hasDropdown: true,
      dropdown: [
        {
          name: "Plans & Pricing",
          path: "/pricing",
          description: "Transparent pricing options",
          icon: <DollarSign className="h-4 w-4" />,
        },
        {
          name: "Plan Comparison",
          path: "/pricing/comparison",
          description: "Detailed feature comparison",
          icon: <FileText className="h-4 w-4" />,
        },
        {
          name: "ROI Calculator",
          path: "/pricing#calculator",
          description: "Calculate your potential savings",
          icon: <Calculator className="h-4 w-4" />,
        },
        {
          name: "Enterprise",
          path: "/pricing#enterprise",
          description: "Custom solutions for large pharmacies",
          icon: <Building className="h-4 w-4" />,
        },
      ],
    },
    {
      name: "Resources",
      path: "/resources",
      hasDropdown: true,
      dropdown: [
        {
          name: "Resource Center",
          path: "/resources",
          description: "Guides, articles and more",
          icon: <FileText className="h-4 w-4" />,
        },
        {
          name: "Blog",
          path: "/resources/blog",
          description: "Latest news and insights",
          icon: <BookOpen className="h-4 w-4" />,
        },
        {
          name: "Case Studies",
          path: "/resources/case-studies",
          description: "Customer success stories",
          icon: <ClipboardList className="h-4 w-4" />,
        },
        {
          name: "Webinars",
          path: "/resources/webinars",
          description: "Educational video content",
          icon: <Video className="h-4 w-4" />,
        },
        {
          name: "Documentation",
          path: "/resources/docs",
          description: "Technical documentation",
          icon: <FileCode className="h-4 w-4" />,
        },
      ],
    },
    {
      name: "About",
      path: "/about",
      hasDropdown: true,
      dropdown: [
        {
          name: "Our Story",
          path: "/about",
          description: "Learn about Pharmart",
          icon: <Info className="h-4 w-4" />,
        },
        {
          name: "Team",
          path: "/about/team",
          description: "Meet our leadership",
          icon: <Users className="h-4 w-4" />,
        },
        {
          name: "Careers",
          path: "/about/careers",
          description: "Join our team",
          icon: <Briefcase className="h-4 w-4" />,
        },
        {
          name: "Press",
          path: "/about/press",
          description: "Latest company news",
          icon: <Newspaper className="h-4 w-4" />,
        },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      hasDropdown: false,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when path changes
    setIsMenuOpen(false);
  }, [pathname]);

  // Check if a path is active, including partial matching for dropdowns
  const isActivePath = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="font-bold text-xl">Pharmart</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.path} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          className={cn(
                            "flex items-center text-sm font-medium transition-colors hover:text-indigo-600",
                            isActivePath(item.path)
                              ? "text-indigo-600"
                              : "text-zinc-700"
                          )}
                        >
                          {item.name}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" className="w-64 p-2">
                        {item.dropdown?.map((dropdownItem, idx) => (
                          <DropdownMenuItem asChild key={idx} className="p-0">
                            <Link
                              href={dropdownItem.path}
                              className={cn(
                                "flex items-start p-3 rounded-md w-full hover:bg-zinc-100 transition-colors",
                                isActivePath(dropdownItem.path) &&
                                  "bg-indigo-50 text-indigo-600"
                              )}
                            >
                              <div className="mr-2 mt-0.5 rounded-md bg-indigo-100 p-1">
                                {dropdownItem.icon}
                              </div>
                              <div>
                                <div className="font-medium">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-xs text-zinc-500">
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-indigo-600",
                      isActivePath(item.path)
                        ? "text-indigo-600"
                        : "text-zinc-700"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-indigo-50 hover:text-indigo-600"
            >
              Sign In
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700" size="sm">
              Start Free Trial
              {/* <Badge className="ml-2 bg-indigo-500 text-xs">14 Days</Badge> */}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] p-0 overflow-auto"
            >
              <div className="p-6 border-b">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">
                      P
                    </div>
                    <span className="font-bold text-xl">Pharmart</span>
                  </Link>
                  <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link href="/auth/signin">Sign In</Link>
                  </Button>
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700 w-full"
                    size="sm"
                    asChild
                  >
                    <Link href="/pricing">Try Free</Link>
                  </Button>
                </div>
              </div>
              <nav className="p-6 pt-4">
                <div className="grid gap-2">
                  {navigation.map((item) => (
                    <div key={item.path} className="mb-4">
                      {item.hasDropdown ? (
                        <div>
                          <div className="font-medium text-zinc-900 mb-2">
                            {item.name}
                          </div>
                          <div className="grid gap-1 pl-2">
                            {item.dropdown?.map((dropdownItem, idx) => (
                              <SheetClose key={idx} asChild>
                                <Link
                                  href={dropdownItem.path}
                                  className={cn(
                                    "flex items-center py-2 text-sm transition-colors hover:text-indigo-600",
                                    isActivePath(dropdownItem.path)
                                      ? "text-indigo-600 font-medium"
                                      : "text-zinc-600"
                                  )}
                                >
                                  <div className="mr-2 rounded-md bg-indigo-100 p-1">
                                    {dropdownItem.icon}
                                  </div>
                                  {dropdownItem.name}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <SheetClose asChild>
                          <Link
                            href={item.path}
                            className={cn(
                              "flex items-center py-2 font-medium transition-colors hover:text-indigo-600",
                              isActivePath(item.path)
                                ? "text-indigo-600"
                                : "text-zinc-900"
                            )}
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
              <div className="p-6 border-t">
                <div className="grid gap-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className="text-sm">(800) 555-1234</span>
                  </div>
                  <div className="flex items-center">
                    <HelpCircle className="h-4 w-4 text-indigo-600 mr-2" />
                    <span className="text-sm">Help & Support</span>
                  </div>
                  <Button
                    className="w-full mt-2"
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
                <div className="flex justify-center mt-6">
                  <Button variant="ghost" size="icon" className="mx-1">
                    <FacebookIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="mx-1">
                    <TwitterIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="mx-1">
                    <LinkedinIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Missing icon components
const Calculator = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-calculator", props.className)}
      {...props}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  );
};

const Building = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-building", props.className)}
      {...props}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
};

const BookOpen = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-book-open", props.className)}
      {...props}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
};

const ClipboardList = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-clipboard-list", props.className)}
      {...props}
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
};

const Video = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-video", props.className)}
      {...props}
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
};

const FileCode = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-file-code", props.className)}
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  );
};

const Users = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-users", props.className)}
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
};

const Briefcase = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-briefcase", props.className)}
      {...props}
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
};

const Newspaper = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-newspaper", props.className)}
      {...props}
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
};

const FacebookIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-facebook", props.className)}
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
};

const TwitterIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-twitter", props.className)}
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
};

const LinkedinIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-linkedin", props.className)}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
};
