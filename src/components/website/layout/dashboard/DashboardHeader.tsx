/**
 * @file components/layout/DashboardHeader.tsx
 * @description Updated header component for the dashboard layout with mobile sidebar integration
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Settings,
  User,
  LogOut,
  Menu as MenuIcon,
  Search,
  HelpCircle,
  Store,
  ChevronDown,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MobileSidebar from "./MobileSidebar";

export default function DashboardHeader() {
  const pathname = usePathname();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Mock user data - would come from auth context in a real implementation
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "",
    role: "Administrator",
  };

  // Mock pharmacy data - would come from API/context in a real implementation
  const pharmacy = {
    name: "Johnson Family Pharmacy",
    locations: 2,
    subscription: "Professional",
    logoUrl: "",
  };

  // Mock notification count - would come from API in a real implementation
  const notificationCount = 3;

  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="h-16 px-4 flex items-center justify-between">
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-3">
          <Sheet
            open={isMobileSidebarOpen}
            onOpenChange={setIsMobileSidebarOpen}
          >
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <MobileSidebar onClose={() => setIsMobileSidebarOpen(false)} />
            </SheetContent>
          </Sheet>

          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">
              Pharmart
            </span>
          </Link>
        </div>

        {/* Search and Navigation */}
        <div className="flex-1 flex items-center justify-end md:justify-between ml-4">
          <div className="relative max-w-md hidden md:flex items-center">
            <Search className="h-4 w-4 absolute left-2.5 top-2.5 text-zinc-500" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 bg-zinc-50 border-zinc-200 focus:bg-white w-full max-w-xs"
            />
          </div>

          <div className="flex items-center space-x-1 sm:space-x-3">
            {/* Store Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden md:flex">
                  <Store className="h-4 w-4 mr-2" />
                  <span className="font-medium text-sm">{pharmacy.name}</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Switch Location</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Johnson Family Pharmacy - Main
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Johnson Family Pharmacy - Downtown
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    href="/dashboard/settings/locations"
                    className="flex items-center"
                  >
                    Manage Locations
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {notificationCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                  )}
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel className="flex items-center justify-between">
                  Notifications
                  {notificationCount > 0 && (
                    <Badge className="bg-indigo-600">
                      {notificationCount} New
                    </Badge>
                  )}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* Example notifications */}
                <div className="max-h-80 overflow-y-auto py-1">
                  <DropdownMenuItem className="py-3 cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium text-sm">Inventory Alert</div>
                      <div className="text-xs text-zinc-500">
                        Lisinopril 10mg Tablets is running low
                      </div>
                      <div className="text-xs text-zinc-400">
                        10 minutes ago
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium text-sm">New Order</div>
                      <div className="text-xs text-zinc-500">
                        Order #34928 has been placed
                      </div>
                      <div className="text-xs text-zinc-400">1 hour ago</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <div className="font-medium text-sm">
                        Staff Invitation Accepted
                      </div>
                      <div className="text-xs text-zinc-500">
                        Jane Smith has accepted the invitation
                      </div>
                      <div className="text-xs text-zinc-400">2 hours ago</div>
                    </div>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard/notifications"
                    className="justify-center font-medium text-indigo-600"
                  >
                    View All Notifications
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Search Toggle */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-auto">
                <div className="py-4">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-2.5 top-2.5 text-zinc-500" />
                    <Input
                      type="search"
                      placeholder="Search for products, orders, customers..."
                      className="pl-8 bg-zinc-50 border-zinc-200 focus:bg-white w-full"
                      autoFocus
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Help */}
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
              <span className="sr-only">Help</span>
            </Button>

            {/* Settings */}
            <Link href="/dashboard/settings" passHref>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Button>
            </Link>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="pl-1.5 pr-0.5">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-indigo-100 text-indigo-600">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center gap-2 p-2">
                  <div className="rounded-full bg-indigo-100 p-1">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-indigo-100 text-indigo-600">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="grid gap-0.5">
                    <p className="font-medium text-sm">{user.name}</p>
                    <p className="text-xs text-zinc-500">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard/account/profile"
                    className="cursor-pointer"
                  >
                    <User className="h-4 w-4 mr-2" />
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard/account/security"
                    className="cursor-pointer"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
