/**
 * @file app/(dashboard)/layout.tsx
 * @description Main layout component for all dashboard pages
 */

import { ReactNode } from "react";
import { Metadata } from "next";
import DashboardHeader from "@/components/website/layout/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/website/layout/dashboard/DashboardSidebar";

export const metadata: Metadata = {
  title: {
    default: "Dashboard - Pharmart",
    template: "%s - Pharmart Dashboard",
  },
  description: "Manage your pharmacy with Pharmart's comprehensive dashboard.",
};

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      <DashboardHeader />
      <div className="flex-1 flex">
        <DashboardSidebar />
        <main className="flex-1 py-8 px-32">{children}</main>
      </div>
    </div>
  );
}
