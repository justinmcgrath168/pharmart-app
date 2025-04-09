/**
 * @file components/layout/BreadcrumbNav.tsx
 * @description Breadcrumb navigation component for dashboard pages
 */

"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  homeHref?: string;
  className?: string;
  separator?: React.ReactNode;
  homeLabel?: string;
}

export default function BreadcrumbNav({
  homeHref = "/dashboard",
  className,
  separator = <ChevronRight className="h-4 w-4 text-zinc-400" />,
  homeLabel = "Dashboard",
}: BreadcrumbProps) {
  const pathname = usePathname();

  // Skip rendering if we're on the home page
  if (pathname === homeHref) {
    return null;
  }

  // Create breadcrumb segments
  const segments = pathname.split("/").filter(Boolean).slice(1); // Remove 'dashboard' as it's our home

  // Generate readable labels and full paths for each segment
  const breadcrumbs = segments.map((segment, i) => {
    const path = `/${segments.slice(0, i + 1).join("/")}`;

    // Format the segment label to be more readable
    let label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Specific overrides for common paths
    if (segment === "pos") label = "POS";

    return { label, path };
  });

  return (
    <nav className={cn("flex", className)} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            href={homeHref}
            className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-indigo-600"
          >
            <Home className="h-4 w-4 mr-2" />
            {homeLabel}
          </Link>
        </li>

        {breadcrumbs.map((breadcrumb, i) => (
          <Fragment key={breadcrumb.path}>
            <li className="flex items-center">{separator}</li>
            <li>
              {i === breadcrumbs.length - 1 ? (
                <span className="text-sm font-medium text-zinc-800">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  href={breadcrumb.path}
                  className="text-sm font-medium text-zinc-500 hover:text-indigo-600"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
