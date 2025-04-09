/**
 * @file components/layout/MobileSidebar.tsx
 * @description Mobile sidebar component for dashboard layout
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
  X,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SheetClose } from "@/components/ui/sheet";

interface MobileSidebarItemProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  active?: boolean;
  badge?: string | number;
  badgeVariant?: "default" | "outline" | "secondary" | "destructive";
  external?: boolean;
}

function MobileSidebarItem({
  href,
  title,
  icon,
  active,
  badge,
  badgeVariant = "default",
  external,
}: MobileSidebarItemProps) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
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
    </SheetClose>
  );
}

interface MobileSidebarGroupProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
}

function MobileSidebarGroup({
  title,
  children,
  defaultOpen = false,
  icon,
}: MobileSidebarGroupProps) {
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

export default function MobileSidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  // Mock user data - would come from auth context in a real implementation
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "",
    role: "Administrator",
  };

  // Helper to check if a path is active
  const isActive = (path: string) => {
    if (path === "/dashboard" && pathname === "/dashboard") {
      return true;
    }
    return path !== "/dashboard" && pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-indigo-100 text-indigo-600">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-sm">{user.name}</div>
            <div className="text-xs text-zinc-500">{user.role}</div>
          </div>
        </div>
        <SheetClose asChild>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </SheetClose>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Main Navigation */}
        <div className="space-y-1">
          <MobileSidebarItem
            href="/dashboard"
            title="Dashboard"
            icon={<LayoutGrid className="h-5 w-5" />}
            active={pathname === "/dashboard"}
          />

          <MobileSidebarGroup
            title="POS System"
            icon={<ShoppingCart className="h-5 w-5" />}
            defaultOpen={isActive("/dashboard/pos")}
          >
            <MobileSidebarItem
              href="/dashboard/pos"
              title="Point of Sale"
              icon={<CreditCard className="h-5 w-5" />}
              active={isActive("/dashboard/pos")}
            />
            <MobileSidebarItem
              href="/dashboard/pos/transactions"
              title="Transactions"
              icon={<Clock className="h-5 w-5" />}
              active={isActive("/dashboard/pos/transactions")}
            />
            <MobileSidebarItem
              href="/dashboard/pos/returns"
              title="Returns & Refunds"
              icon={<RefreshCw className="h-5 w-5" />}
              active={isActive("/dashboard/pos/returns")}
            />
          </MobileSidebarGroup>

          <MobileSidebarGroup
            title="Pharmacy"
            icon={<Pill className="h-5 w-5" />}
            defaultOpen={isActive("/dashboard/pharmacy")}
          >
            <MobileSidebarItem
              href="/dashboard/pharmacy/prescriptions"
              title="Prescriptions"
              icon={<FileText className="h-5 w-5" />}
              active={isActive("/dashboard/pharmacy/prescriptions")}
              badge={3}
            />
            <MobileSidebarItem
              href="/dashboard/pharmacy/patients"
              title="Patients"
              icon={<Users className="h-5 w-5" />}
              active={isActive("/dashboard/pharmacy/patients")}
            />
            <MobileSidebarItem
              href="/dashboard/pharmacy/insurance"
              title="Insurance"
              icon={<Shield className="h-5 w-5" />}
              active={isActive("/dashboard/pharmacy/insurance")}
            />
          </MobileSidebarGroup>

          <MobileSidebarGroup
            title="Inventory"
            icon={<Package className="h-5 w-5" />}
            defaultOpen={isActive("/dashboard/inventory")}
          >
            <MobileSidebarItem
              href="/dashboard/inventory/products"
              title="Products"
              icon={<Layers className="h-5 w-5" />}
              active={isActive("/dashboard/inventory/products")}
            />
            <MobileSidebarItem
              href="/dashboard/inventory/stock"
              title="Stock Control"
              icon={<BarChart3 className="h-5 w-5" />}
              active={isActive("/dashboard/inventory/stock")}
            />
            <MobileSidebarItem
              href="/dashboard/inventory/suppliers"
              title="Suppliers"
              icon={<Truck className="h-5 w-5" />}
              active={isActive("/dashboard/inventory/suppliers")}
            />
            <MobileSidebarItem
              href="/dashboard/inventory/purchase-orders"
              title="Purchase Orders"
              icon={<FileText className="h-5 w-5" />}
              active={isActive("/dashboard/inventory/purchase-orders")}
            />
          </MobileSidebarGroup>

          <MobileSidebarGroup
            title="Online Store"
            icon={<Store className="h-5 w-5" />}
            defaultOpen={isActive("/dashboard/store")}
          >
            <MobileSidebarItem
              href="/dashboard/store/products"
              title="Store Products"
              icon={<Package className="h-5 w-5" />}
              active={isActive("/dashboard/store/products")}
            />
            <MobileSidebarItem
              href="/dashboard/store/orders"
              title="Online Orders"
              icon={<ShoppingCart className="h-5 w-5" />}
              active={isActive("/dashboard/store/orders")}
              badge={2}
            />
            <MobileSidebarItem
              href="/dashboard/store/promotions"
              title="Promotions"
              icon={<Tag className="h-5 w-5" />}
              active={isActive("/dashboard/store/promotions")}
            />
          </MobileSidebarGroup>

          <MobileSidebarItem
            href="/dashboard/customers"
            title="Customers"
            icon={<Users className="h-5 w-5" />}
            active={isActive("/dashboard/customers")}
          />

          <MobileSidebarItem
            href="/dashboard/calendar"
            title="Calendar"
            icon={<Calendar className="h-5 w-5" />}
            active={isActive("/dashboard/calendar")}
          />

          <MobileSidebarItem
            href="/dashboard/reports"
            title="Reports"
            icon={<PieChart className="h-5 w-5" />}
            active={isActive("/dashboard/reports")}
          />

          <MobileSidebarItem
            href="/dashboard/staff"
            title="Staff Management"
            icon={<Users className="h-5 w-5" />}
            active={isActive("/dashboard/staff")}
          />
        </div>

        <Separator />

        {/* Secondary Navigation */}
        <div className="space-y-1">
          <MobileSidebarItem
            href="/dashboard/settings"
            title="Settings"
            icon={<Settings className="h-5 w-5" />}
            active={isActive("/dashboard/settings")}
          />

          <MobileSidebarGroup
            title="Help & Support"
            icon={<HelpCircle className="h-5 w-5" />}
          >
            <MobileSidebarItem
              href="https://help.pharmart.com"
              title="Knowledge Base"
              icon={<BookOpen className="h-5 w-5" />}
              external
            />
            <MobileSidebarItem
              href="/dashboard/support"
              title="Support Tickets"
              icon={<MessageSquare className="h-5 w-5" />}
              active={isActive("/dashboard/support")}
            />
            <MobileSidebarItem
              href="/dashboard/feedback"
              title="Send Feedback"
              icon={<FileQuestion className="h-5 w-5" />}
              active={isActive("/dashboard/feedback")}
            />
          </MobileSidebarGroup>
        </div>
      </div>

      {/* Subscription Status */}
      <div className="p-4 bg-indigo-50 border-t">
        <div className="text-sm font-medium">Professional Plan</div>
        <div className="text-xs text-zinc-500 mt-1">
          Next billing: May 15, 2025
        </div>
        <SheetClose asChild>
          <Button
            variant="link"
            className="text-xs p-0 h-auto mt-2 text-indigo-600"
          >
            Manage Subscription
          </Button>
        </SheetClose>
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
