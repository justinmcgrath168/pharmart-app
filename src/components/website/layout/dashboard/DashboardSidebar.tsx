/**
 * @file components/layout/DashboardSidebar.tsx
 * @description Sidebar navigation component for the dashboard layout
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  FileText,
  Settings,
  CreditCard,
  Calendar,
  MessageSquare,
  PieChart,
  Store,
  ChevronDown,
  ChevronRight,
  Clock,
  Pill,
  BookOpen,
  Truck,
  Tag,
  Layers,
  HelpCircle,
  FileQuestion,
  LayoutGrid,
  Menu as MenuIcon,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  active?: boolean;
  badge?: string | number;
  badgeVariant?: "default" | "outline" | "secondary" | "destructive";
  external?: boolean;
  onClick?: () => void;
}

function SidebarItem({
  href,
  title,
  icon,
  active,
  badge,
  badgeVariant = "default",
  external,
  onClick,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors",
        active ? "bg-zinc-100 text-indigo-600" : "text-zinc-700"
      )}
    >
      {icon}
      <span>{title}</span>
      {badge && (
        <Badge
          variant={badgeVariant}
          className={cn(
            "ml-auto",
            badgeVariant === "default" && "bg-indigo-600"
          )}
        >
          {badge}
        </Badge>
      )}
    </Link>
  );
}

interface SidebarGroupProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
}

function SidebarGroup({
  title,
  children,
  defaultOpen = false,
  icon,
}: SidebarGroupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors">
        <div className="flex items-center gap-3">
          {icon}
          <span>{title}</span>
        </div>
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-9 pr-2 mt-1 space-y-1">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function DashboardSidebar() {
  const pathname = usePathname();

  // State for the mobile sidebar
  const [isExpanded, setIsExpanded] = useState(true);

  // Helper to check if a path is active
  const isActive = (path: string) => {
    if (path === "/dashboard" && pathname === "/dashboard") {
      return true;
    }
    return path !== "/dashboard" && pathname.startsWith(path);
  };

  return (
    <div
      className={cn(
        "bg-white border-r h-full fixed left-0 top-16 bottom-0 w-64 transition-all duration-300 overflow-y-auto",
        "hidden md:block",
        !isExpanded && "w-20"
      )}
    >
      <div className="p-4 space-y-6">
        {/* Collapse Button */}
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-zinc-500 hover:text-zinc-900"
          >
            <MenuIcon className="h-4 w-4" />
          </Button>
        </div>

        {isExpanded ? (
          <>
            {/* Main Navigation */}
            <div className="space-y-1">
              <SidebarItem
                href="/dashboard"
                title="Dashboard"
                icon={<LayoutGrid className="h-5 w-5" />}
                active={pathname === "/dashboard"}
              />

              <SidebarGroup
                title="POS System"
                icon={<ShoppingCart className="h-5 w-5" />}
                defaultOpen={isActive("/dashboard/pos")}
              >
                <SidebarItem
                  href="/dashboard/pos"
                  title="Point of Sale"
                  icon={<CreditCard className="h-5 w-5" />}
                  active={isActive("/dashboard/pos")}
                />
                <SidebarItem
                  href="/dashboard/pos/transactions"
                  title="Transactions"
                  icon={<Clock className="h-5 w-5" />}
                  active={isActive("/dashboard/pos/transactions")}
                />
                <SidebarItem
                  href="/dashboard/pos/returns"
                  title="Returns & Refunds"
                  icon={<RefreshCw className="h-5 w-5" />}
                  active={isActive("/dashboard/pos/returns")}
                />
              </SidebarGroup>

              <SidebarGroup
                title="Pharmacy"
                icon={<Pill className="h-5 w-5" />}
                defaultOpen={isActive("/dashboard/pharmacy")}
              >
                <SidebarItem
                  href="/dashboard/pharmacy/prescriptions"
                  title="Prescriptions"
                  icon={<FileText className="h-5 w-5" />}
                  active={isActive("/dashboard/pharmacy/prescriptions")}
                  badge={3}
                />
                <SidebarItem
                  href="/dashboard/pharmacy/patients"
                  title="Patients"
                  icon={<Users className="h-5 w-5" />}
                  active={isActive("/dashboard/pharmacy/patients")}
                />
                <SidebarItem
                  href="/dashboard/pharmacy/insurance"
                  title="Insurance"
                  icon={<Shield className="h-5 w-5" />}
                  active={isActive("/dashboard/pharmacy/insurance")}
                />
              </SidebarGroup>

              <SidebarGroup
                title="Inventory"
                icon={<Package className="h-5 w-5" />}
                defaultOpen={isActive("/dashboard/inventory")}
              >
                <SidebarItem
                  href="/dashboard/inventory/products"
                  title="Products"
                  icon={<Layers className="h-5 w-5" />}
                  active={isActive("/dashboard/inventory/products")}
                />
                <SidebarItem
                  href="/dashboard/inventory/stock"
                  title="Stock Control"
                  icon={<BarChart3 className="h-5 w-5" />}
                  active={isActive("/dashboard/inventory/stock")}
                />
                <SidebarItem
                  href="/dashboard/inventory/suppliers"
                  title="Suppliers"
                  icon={<Truck className="h-5 w-5" />}
                  active={isActive("/dashboard/inventory/suppliers")}
                />
                <SidebarItem
                  href="/dashboard/inventory/purchase-orders"
                  title="Purchase Orders"
                  icon={<FileText className="h-5 w-5" />}
                  active={isActive("/dashboard/inventory/purchase-orders")}
                />
              </SidebarGroup>

              <SidebarGroup
                title="Online Store"
                icon={<Store className="h-5 w-5" />}
                defaultOpen={isActive("/dashboard/store")}
              >
                <SidebarItem
                  href="/dashboard/store/products"
                  title="Store Products"
                  icon={<Package className="h-5 w-5" />}
                  active={isActive("/dashboard/store/products")}
                />
                <SidebarItem
                  href="/dashboard/store/orders"
                  title="Online Orders"
                  icon={<ShoppingCart className="h-5 w-5" />}
                  active={isActive("/dashboard/store/orders")}
                  badge={2}
                />
                <SidebarItem
                  href="/dashboard/store/promotions"
                  title="Promotions"
                  icon={<Tag className="h-5 w-5" />}
                  active={isActive("/dashboard/store/promotions")}
                />
              </SidebarGroup>

              <SidebarItem
                href="/dashboard/customers"
                title="Customers"
                icon={<Users className="h-5 w-5" />}
                active={isActive("/dashboard/customers")}
              />

              <SidebarItem
                href="/dashboard/calendar"
                title="Calendar"
                icon={<Calendar className="h-5 w-5" />}
                active={isActive("/dashboard/calendar")}
              />

              <SidebarItem
                href="/dashboard/reports"
                title="Reports"
                icon={<PieChart className="h-5 w-5" />}
                active={isActive("/dashboard/reports")}
              />

              <SidebarItem
                href="/dashboard/staff"
                title="Staff Management"
                icon={<Users className="h-5 w-5" />}
                active={isActive("/dashboard/staff")}
              />
            </div>

            <Separator />

            {/* Secondary Navigation */}
            <div className="space-y-1">
              <SidebarItem
                href="/dashboard/settings"
                title="Settings"
                icon={<Settings className="h-5 w-5" />}
                active={isActive("/dashboard/settings")}
              />

              <SidebarGroup
                title="Help & Support"
                icon={<HelpCircle className="h-5 w-5" />}
              >
                <SidebarItem
                  href="https://help.pharmart.com"
                  title="Knowledge Base"
                  icon={<BookOpen className="h-5 w-5" />}
                  external
                />
                <SidebarItem
                  href="/dashboard/support"
                  title="Support Tickets"
                  icon={<MessageSquare className="h-5 w-5" />}
                  active={isActive("/dashboard/support")}
                />
                <SidebarItem
                  href="/dashboard/feedback"
                  title="Send Feedback"
                  icon={<FileQuestion className="h-5 w-5" />}
                  active={isActive("/dashboard/feedback")}
                />
              </SidebarGroup>
            </div>

            {/* Subscription Status */}
            <div className="mt-auto p-4 bg-indigo-50 rounded-lg">
              <div className="text-sm font-medium">Professional Plan</div>
              <div className="text-xs text-zinc-500 mt-1">
                Next billing: May 15, 2025
              </div>
              <Button
                variant="link"
                className="text-xs p-0 h-auto mt-2 text-indigo-600"
              >
                Manage Subscription
              </Button>
            </div>
          </>
        ) : (
          // Collapsed Sidebar with only icons
          <div className="flex flex-col items-center space-y-4 mt-6">
            <Link
              href="/dashboard"
              className={cn(
                "p-2 rounded-md hover:bg-zinc-100",
                isActive("/dashboard") && "bg-zinc-100 text-indigo-600"
              )}
            >
              <LayoutGrid className="h-5 w-5" />
            </Link>
            <Link
              href="/dashboard/pos"
              className={cn(
                "p-2 rounded-md hover:bg-zinc-100",
                isActive("/dashboard/pos") && "bg-zinc-100 text-indigo-600"
              )}
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link
              href="/dashboard/pharmacy/prescriptions"
              className={cn(
                "p-2 rounded-md hover:bg-zinc-100 relative",
                isActive("/dashboard/pharmacy") && "bg-zinc-100 text-indigo-600"
              )}
            >
              <Pill className="h-5 w-5" />
              <span className="absolute top-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </Link>
            <Link
              href="/dashboard/inventory/products"
              className={cn(
                "p-2 rounded-md hover:bg-zinc-100",
                isActive("/dashboard/inventory") &&
                  "bg-zinc-100 text-indigo-600"
              )}
            >
              <Package className="h-5 w-5" />
            </Link>
            <Link
              href="/dashboard/store/products"
              className={cn(
                "p-2 rounded-md hover:bg-zinc-100",
                isActive("/dashboard/store") && "bg-zinc-100 text-indigo-600"
              )}
            >
              <Store className="h-5 w-5" />
            </Link>
            <Link
              href="/dashboard/customers"
              className={cn(
                "p-2 rounded-md hover:bg-zinc-100",
                isActive("/dashboard/customers") &&
                  "bg-zinc-100 text-indigo-600"
              )}
            >
              <Users className="h-5 w-5" />
            </Link>
            <Link
              href="/dashboard/calendar"
              className={cn(
                "p-2 rounded-md hover:bg-zinc-100",
                isActive("/dashboard/calendar") && "bg-zinc-100 text-indigo-600"
              )}
            >
              <Calendar className="h-5 w-5" />
            </Link>
            <Link
              href="/dashboard/reports"
              className={cn(
                "p-2 rounded-md hover:bg-zinc-100",
                isActive("/dashboard/reports") && "bg-zinc-100 text-indigo-600"
              )}
            >
              <PieChart className="h-5 w-5" />
            </Link>
            <Link
              href="/dashboard/staff"
              className={cn(
                "p-2 rounded-md hover:bg-zinc-100",
                isActive("/dashboard/staff") && "bg-zinc-100 text-indigo-600"
              )}
            >
              <Users className="h-5 w-5" />
            </Link>
            <Separator className="w-full my-2" />
            <Link
              href="/dashboard/settings"
              className={cn(
                "p-2 rounded-md hover:bg-zinc-100",
                isActive("/dashboard/settings") && "bg-zinc-100 text-indigo-600"
              )}
            >
              <Settings className="h-5 w-5" />
            </Link>
            <Link
              href="https://help.pharmart.com"
              className="p-2 rounded-md hover:bg-zinc-100"
            >
              <HelpCircle className="h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// Missing icons
const RefreshCw = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("lucide lucide-refresh-cw", props.className)}
    {...props}
  >
    <path d="M21 2v6h-6" />
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M3 22v-6h6" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
  </svg>
);

const Shield = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("lucide lucide-shield", props.className)}
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
